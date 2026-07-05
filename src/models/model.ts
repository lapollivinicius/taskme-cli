export class Task {
  id: string | undefined;
  content: string;
  hours: number | undefined;
  checked: boolean;
  createdAt: number;
  checkedAt: number;

  constructor(content: string, hours: number, createdAt: number) {
    this.id = crypto.randomUUID().split("-")[0];
    this.content = content;
    this.hours = hours;
    this.checked = false;
    this.createdAt = createdAt;
    this.checkedAt = 0
  }
}