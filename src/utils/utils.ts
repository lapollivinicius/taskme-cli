export const colors = {
  gray: "\x1b[90m",
  black: "\x1b[30m", 
  red: "\x1b[31m", 
  green: "\x1b[32m",
  yellow: "\x1b[33m", 
  blue: "\x1b[34m", 
  magenta: "\x1b[35m", 
  cyan: "\x1b[36m", 
  white: "\x1b[37m" 
};

export const style = {
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
}

export const reset =  "\x1b[0m"

export const background = {
  black: "\x1b[40m", 
  red: "\x1b[41m", 
  green: "\x1b[42m",
  yellow: "\x1b[43m", 
  blue: "\x1b[44m", 
  magenta: "\x1b[45m", 
  cyan: "\x1b[46m", 
  white: "\x1b[47m" 
}

export function progess_bar(current: number, total: number): string {
  const width = 10;

  const progress = total === 0 ? 0 : current / total;
  const filled = Math.round(progress * width);

  return `${"█".repeat(filled)}${"░".repeat(width - filled)} ${Math.round(progress * 100)}%`;
}