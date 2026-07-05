import { list, history, all, clear, reset, init, create, check, restore, erase, help, docs, edit, credit } from "../service/task.js";
import { printError, printInfo } from "../utils/print.js";

export default function router(command: string, first_field?: string, second_field?: string, third_field?: string, args?: string[]) {

  switch (command) {
    
    case "list":
      if(first_field) return printError("Command Invalid")
      list()
      break
    
    case "history":
      if(first_field) return printError("Command Invalid")
      history()
      break
    
    case "all":
      if(first_field) return printError("Command Invalid")
      all()
      break

    case "clear":
      if(first_field) return printError("Command Invalid")
      clear()
      break

    case "reset":
      if(first_field) return printError("Command Invalid")
      reset()
      break

    case "init":
      if(first_field) return printError("Command Invalid")
      init()
      break

    case "help":
      if(first_field) return printError("Command Invalid")
      help()
      break

    case "docs":
      if(first_field) return printError("Command Invalid")
      docs()
      break
    case "credit":
      if(first_field) return printError("Command Invalid")
      credit()
      break

    case "add":
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      if(!second_field) second_field = "0"
      create(first_field, Number(second_field))
      break

    case "check":
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      check(first_field)
      break
    
    case "restore": 
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      if(!second_field) second_field = "0"
      restore(first_field, Number(second_field))
      break

    case "remove":
      if(!first_field) return printInfo("Please provide a content and a deadline (optional) for the task")
      erase(first_field)
      break

    case "edit":
      if(!first_field) return printInfo("Please provide a task id")
      if(!second_field) return printInfo("Please provide a content for the task")
      if(!third_field) third_field = "0"
      edit(first_field, second_field, Number(third_field))
      break

    default:
      printInfo("use a command -> 'help' to know more")
      break
  }
  return
};