import router from "./src/routes/router.ts"
import { printInfo } from "./src/utils/print.ts"

const [,,command, first_field, second_field, third_field, ...args] = process.argv

if(!command) {
  printInfo("use a command -> 'help' to know more")
  process.exit(0)
}

router(command, first_field, second_field, third_field, args)