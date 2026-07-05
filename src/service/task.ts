import { Task } from "../models/model.ts";
import { load, save } from "../repository/database.ts";
import { confirmPrompt } from "../utils/input.ts";
import {
  printAll,
  printHistory,
  printInit,
  printSucess,
  printTasks,
  printError,
  printHelp,
  printDocs,
  printCredit,
} from "../utils/print.ts";

export function create(content: string, hours?: number) {

  const db = load();
  const time = Math.abs(hours || 0)
  const task = new Task(content, time * 3600000, new Date().getTime());
  db.tasks.push(task);
  save(db);

  printSucess("task added");
}

export function list() {
  const db = load();

  if (db.tasks.length === 0) {
    printError("No tasks found.");
    return;
  }

  printTasks(db.tasks);
}

export function history() {
  const db = load();

  if (db.history.length === 0) {
    printError("No tasks found.");
    return;
  }

  printHistory(db.history);
}

export function all() {
  const db = load();
  const all = [...db.tasks, ...db.history];

  if (all.length === 0) {
    printError("No tasks found.");
    return;
  }

  printAll(all);
}

export async function check(id: string) {

  const db = load();
  const checked: Task = db.tasks.find((task: Task) => task.id?.startsWith(id));

  if (!checked) {
    printError("Task not found");
    return;
  }

  const confirm = await confirmPrompt("Are you sure?");
  if (!confirm) {
    printError("Cancelled");
    return;
  }

  checked.checked = true;
  checked.checkedAt = Date.now();
  db.history.push(checked);

  db.tasks = db.tasks.filter((task: Task) => task.id !== checked.id);

  save(db);

  printSucess(`task ${checked.id?.slice(0, 5)} checked and added in history`);
}

export async function clear() {
  const confirm = await confirmPrompt("Are you sure?");
  if (!confirm) {
    printError("Cancelled");
    return;
  }

  const db = load();
  db.history = [];
  save(db);

  printSucess("The History is clean");
}

export async function reset() {
  const confirm = await confirmPrompt("Are you sure?");
  if (!confirm) {
    printError("Cancelled");
    return;
  }

  const db = load();
  db.history = [];
  db.tasks = [];
  save(db);

  printSucess("The Tasks and History are clean");
}

export function init() {
  load();
  printInit();
}

export async function restore(id: string, hours?: number) {

  const db = load();
  const time = Math.abs(hours || 0)
  const checked: Task = db.history.find((task: Task) =>
    task.id?.startsWith(id),
  );

  if (!checked) {
    printError("Task Not Found");
    return;
  }

  const confirm = await confirmPrompt("Are you sure?");
  if (!confirm) {
    printError("Cancelled");
    return;
  }

  if (time) {
    checked.time = time * 3600000;
  } else {
    checked.time = 0
  }

  checked.createdAt = Date.now();
  db.tasks.push(checked);
  db.history = db.history.filter((task: Task) => task.id !== checked.id);
  save(db);

  printSucess(
    `task ${checked.id?.slice(0, 5)} restored and added back to the tasks`,
  );
}

export async function erase(id: string) {

  const db = load();

  const task = db.tasks.find((task: Task) => task.id?.startsWith(id));
  const history = db.history.find((task: Task) => task.id?.startsWith(id));

  if (!task && !history) {
    printError("Task Not Found");
    return;
  }

  const task_index = db.tasks.findIndex((task: Task) => task.id?.startsWith(id));
  const history_index = db.history.findIndex((task: Task) => task.id?.startsWith(id));

  const confirm = await confirmPrompt("Are you sure?");
  if (!confirm) {
    printError("Cancelled");
    return;
  }

  if (task_index !== -1) {
    db.tasks.splice(task_index, 1);
    save(db);
    printSucess(`task ${task.id?.slice(0, 5)} removed from tasks`);
    return;
  }

  if (history_index !== -1) {
    db.history.splice(history_index, 1);
    save(db);
    printSucess(`task ${history.id?.slice(0, 5)} removed from history`);
    return;
  }
}

export async function edit(id: string, content: string, hours?: number) {

  const db = load()
  const time = Math.abs(hours || 0)
  const task: Task = db.tasks.find((task: Task) => task.id?.startsWith(id))

  if(!task) {
    printError("Task Not Found")
    return
  }

  if(time) {
    task.time = time * 360000
  } else {
    task.time = 0
  }

  if(content) task.content = content
  save(db)

  printSucess(`task ${task.id?.slice(0,5)} edited`)

}

export function help() {
  printHelp()
  return
}

export function docs() {
  printDocs();
  return
}

export function credit() {
  printCredit();
  return
}
