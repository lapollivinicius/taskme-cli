#!/usr/bin/env node
import router from "./routes/router.js"
import { printInfo } from "./utils/print.js"

const [,,command, first_field, second_field, third_field, ...args] = process.argv

if(!command) {
  printInfo("use 'cd project' and 'task init' to use taskme")
  process.exit(0)
}

router(command, first_field, second_field, third_field, args)