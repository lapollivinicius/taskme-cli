import router from "./src/routes/router.ts"
import { printInfo } from "./src/utils/print.ts"

const [,,command, content, index, ...args] = process.argv

if(!command) {
  printInfo("use a command -> 'help' to know more")
  process.exit(0)
}

router(command, content, Number(index), args)