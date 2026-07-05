import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { colors, style, background, reset} from "./utils.js";
import { printError } from "./print.js";

export async function confirmPrompt(msg: string) {

  const rl = createInterface({ input, output });

  const answer = await rl.question(`${background.black}${colors.blue}${style.bold}${msg} (Y/n) ${reset}`);

  const confirmed = answer.trim().toLowerCase();

  rl.close()

  if(confirmed === "y") {
    return true
  } else if (confirmed === "n") {
    return false
  } else {
    printError("Invalid input. Please enter 'Y' or 'n'.");
    return false
  }
}