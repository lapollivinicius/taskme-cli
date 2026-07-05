import fs from "node:fs"
import { Task } from "../models/model.ts";

const filePath = "./src/data/TASKME.json";

export function load() {

  const init = {
    tasks: [],
    history: [],
  };

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(init, null, 2));
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function save(task: Task): void {
  fs.writeFileSync(filePath, JSON.stringify(task, null, 2));
}