export class Task {
  id: string | undefined;
  content: string;
  time: number | undefined;
  checked: boolean;
  createdAt: number;

  constructor(content: string, time: number, createdAt: number) {
    this.id = crypto.randomUUID().split("-")[0];
    this.content = content;
    this.time = time;
    this.checked = false;
    this.createdAt = createdAt;
  }
}