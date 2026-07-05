import { Task } from "../models/model.ts";
import { load } from "../repository/database.ts";
import { colors, style, background, reset, progess_bar } from "./utils.ts";

export function printTasks(tasks: Task[]) { 

  console.log(`${colors.yellow}${style.bold}${"▶ TASKS "}${reset}`);
  console.log(`${colors.yellow}${style.bold}${style.underline}${"st".padEnd(4)}${"id".padEnd(7)}${"dl".padEnd(5)}content ${reset}`
    )

  const db = load()
  const allTasks = [...db.tasks, ...db.history]

  tasks.forEach((task: Task, index: number) => {

    const hours = Math.floor((((task.time || 0) - (Date.now() - task.createdAt)) / 3600000))
    const color = hours >= 1 ?  colors.white : colors.red
    const status = hours >= 1 ?  "○" : "✗"

    console.log(
      `${color}${style.bold}${status.padEnd(4)}${task.id?.slice(0, 5).padEnd(7)}${hours <= 0 ? "0h".padEnd(5) : hours+"h".padEnd(4)}"${task.content}"${reset}`
    );

  });
  console.log(`${colors.yellow}${style.bold}PROGRESS: ${progess_bar(db.history.length, allTasks.length)}${reset}`)
}

export function printHistory(tasks: Task[]) { 

  console.log(`${colors.blue}${style.bold}${"▶ HISTORY "}${reset}`);
  console.log(`${colors.blue}${style.bold}${style.underline}${"st".padEnd(4)}${"id".padEnd(7)}content ${reset}`
    )

  tasks.forEach((task: Task, index: number) => {
    
    console.log(
      `${colors.green}${style.bold}${"✔".padEnd(4)}${task.id?.slice(0, 5).padEnd(7)}${task.content}${reset}`
    );

  });

}

export function printAll(tasks: Task[]) {

  console.log(`${background.black}${colors.cyan}${style.bold}${"▶ TASKS & HISTORY "}${reset}`);
  console.log(`${background.black}${colors.yellow}${style.bold}${style.underline}${"st".padEnd(4)}${"id".padEnd(7)}content ${reset}`
    )

  tasks.forEach((task: Task, index: number) => {

    const checked = task.checked 
    const color = task.checked ? colors.green : colors.blue
    
    console.log(
      `${background.black}${color}${style.bold}${checked ? "✔".padEnd(4) : "○".padEnd(4)}${task.id?.slice(0, 5).padEnd(7)}${task.content}${reset}`
    );

  });

}

export function printInit() {

  console.log(`${colors.yellow}${style.bold}WELCOME TO                                  ▄▄ 
██████ ▄████▄ ▄█████ ██ ▄█▀ ██▄  ▄██ ██████ ██ 
  ██   ██▄▄██ ▀▀▀▄▄▄ ████   ██ ▀▀ ██ ██▄▄   ██ 
  ██   ██  ██ █████▀ ██ ▀█▄ ██    ██ ██▄▄▄▄ ▄▄ 
use "task add" <msg> <deadline in hours> to add a task
use "task help" to know the commands${reset}`)

}

export function printSucess(msg: string) {
  console.log(`${colors.black}${background.green}${style.bold} ✔ ${msg} ${reset}`)
  return
}

export function printInfo(msg: string) {
  console.log(`${colors.white}${background.blue}${style.bold} ℹ ${msg} ${reset}`)
  return
}

export function printError(msg: string) {
  console.log(`${colors.black}${background.red}${style.bold} ⚠ ${msg} ${reset}`)
  return
}

export function printHelp() {
  console.log(
`${background.black}${colors.yellow}HI, THERE :) ${reset}
use this commads to use tasks

init       init the tasks

list       list tasks
history    list tasks checked, the history
all        list tasks and history
clear      to clear the history
reset      to clear tasks and history
docs       to open docs
credit     to know the creator :)

add <content> <dl>           to add a task
check <id>                   to check a task and add in history
restore <id> <dl>            to restore a task from history
remove <id>                  to delete a task from tasks or history
edit <id> <content> <dl>     to delete a task from tasks or history`
)
  return
}

export function printDocs() {
  console.log(`${background.black}${colors.yellow}this is an open source project, you are free to contribuite
https://github.com/lapollivinicius/taskme-cli ${reset}
`)
  return
}

export function printCredit() {
  console.log(
`${background.black}${colors.yellow}THANKS FOR COMING :)
▄▖▄▖▄▖▄▖▄▖▄▖▄   ▄ ▖▖  ▖ ▄▖▄▖▄▖▖ ▖ ▄▖
▌ ▙▘▙▖▌▌▐ ▙▖▌▌  ▙▘▌▌  ▌ ▌▌▙▌▌▌▌ ▌ ▐ 
▙▖▌▌▙▖▛▌▐ ▙▖▙▘  ▙▘▐   ▙▖▛▌▌ ▙▌▙▖▙▖▟▖
https://github.com/lapollivinicius ${reset}`)
  return
}