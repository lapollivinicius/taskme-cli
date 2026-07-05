import { list, history, all, clear, reset, init, create, check, restore, erase, help, docs, edit, credit } from "../service/task.ts";
import { printInfo } from "../utils/print.ts";

export default function router(command: string, first_field?: string, second_field?: string, third_field?: string, args?: string[]) {

  switch (command) {
    case "list":
      list()
      break
    
    case "history":
      history()
      break
    
    case "all":
      all()
      break

    case "clear":
      clear()
      break

    case "reset":
      reset()
      break

    case "init":
      init()
      break

    case "help":
      help()
      break

    case "docs":
      docs()
      break
    case "credit":
      credit()
      break

    case "add":
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      create(first_field, Number(second_field))
      break

    case "check":
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      check(first_field)
      break
    
    case "restore": 
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      restore(first_field, Number(second_field))
      break

    case "remove":
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      erase(first_field)
      break

    case "edit":
      if(!first_field) return printInfo("Please provide a task id")
      if(!second_field) return printInfo("Please provide a content for the task")
      edit(first_field, second_field, Number(third_field))
      break

    default:
      printInfo("use a command -> 'help' to know more")
      break
  }
  return
};