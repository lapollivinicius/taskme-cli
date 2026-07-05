import { list, history, all, clear, reset, init, create, check, restore, erase, help, docs } from "../service/task.ts";
import { printInfo } from "../utils/print.ts";

export default function router(command: string, content?: string, index?: number, args?: string[]) {

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

    case "add":
      if(!content) return printInfo("Please provide a content and a deadline (optional) for the task")
      if(!index) index = 0
      create(content, index)
      break

    case "check":
      if(!content) return printInfo("Please provide a content and a deadline (optional) for the task")
      check(content)
      break
    
    case "restore": 
      if(!content) return printInfo("Please provide a content and a deadline (optional) for the task")
      if(!index) index = 0
      restore(content, index)
      break

    case "remove":
      if(!content) return printInfo("Please provide a content and a deadline (optional) for the task")
      erase(content)
      break
    default:
      printInfo("use a command -> 'help' to know more")
      break
  }
  return
};