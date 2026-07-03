import fs from "fs";

const data_file = "./TASKME.json";
const init = { tasks: [], history: [] }

function LoadDataFile() {
  if (!fs.existsSync(data_file)) {
    fs.writeFileSync(data_file, JSON.stringify(init, null, 2));
  }
  return JSON.parse(fs.readFileSync(data_file));
}

function saveDataToFile(df) {
  fs.writeFileSync(data_file, JSON.stringify(df, null, 2));
}

function checkTask(df, task_id) {
  const task = df.tasks.filter(t => t.id === task_id);
  if (!task) {
    console.log(`Task with ID ${task_id} not found.`);
    return;
  }

  task.done = true;
  df.history.push({ ...task, completedAt: Date.now() });
  df.tasks = df.tasks.filter(t => t.id !== task_id);
  saveDataToFile(df);
}

// MAIN COMMAND HANDLER
const [, , command, ...args] = process.argv;
const df = LoadDataFile();

// ADD TASK
if (command === "add") {
  const contentArr = args;
  const content = contentArr.slice(0, -1).join(" ") || contentArr.join(" ");
  if (contentArr.length < 2 || isNaN(Number(contentArr[contentArr.length - 1]))) {
    console.log("Please provide a task description and deadline in hours.");
    process.exit(1);
  }
  const hours = Number(contentArr[contentArr.length - 1]);

  const task = {
    id: df.tasks.length + 1,
    content,
    createdAt: Date.now(),
    deadlineHours: hours,
    done: false
  };

  df.tasks.push(task);
  saveDataToFile(df);

  console.log("task added:", task);
}

// LIST TASKS
if (command === "list") {
  const now = Date.now();

  df.tasks.forEach(t => {
    const deadline = t.createdAt + t.deadlineHours * 3600000;
    const isOverdue = now < deadline;

    console.log(
      `${t.id} | ${t.user} | ${t.content} | ${isOverdue ? "OK" : "DEAD"} | ${new Date(t.createdAt).toLocaleString()}`
    );
  });
}

// HISTORY TASKS
if (command === "history") {
  console.log(df.history.content);
}

// CHECK TASK
if(command === "check") {
  const task_id = Number(args[0]);
  checkTask(df, task_id);
  console.log(`Task with ID ${task_id} marked as done.`);
}


