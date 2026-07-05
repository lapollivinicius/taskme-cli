<div align="center">

# TaskMe

A simple, fast and beautiful CLI task manager for your terminal.

```
██████ ▄████▄ ▄█████ ██ ▄█▀ ██▄  ▄██ ██████ ██
  ██   ██▄▄██ ▀▀▀▄▄▄ ████   ██ ▀▀ ██ ██▄▄   ██
  ██   ██  ██ █████▀ ██ ▀█▄ ██    ██ ██▄▄▄▄ ▄▄
```

Keep your tasks where you already work.

</div>

---

## Features

- ✓ Zero configuration
- ✓ JSON database
- ✓ Deadlines
- ✓ Task history
- ✓ Restore completed tasks
- ✓ Beautiful terminal output
- ✓ Open Source

---

## Installation

### npm

```bash
npm install -g taskme
```

### bun

```bash
bun add -g taskme
```

---

## Initialize

```bash
task init
```

This creates a `TASKME.json` file in the current project.

---

## Commands

| Command | Description |
|----------|-------------|
| `task list` | Show pending tasks |
| `task history` | Show completed tasks |
| `task all` | Show everything |
| `task add "<content>" <hours>` | Create a task |
| `task check <id>` | Complete a task |
| `task restore <id> <hours>` | Restore a completed task |
| `task edit <id> "<content>" <hours>` | Edit a task |
| `task remove <id>` | Delete a task |
| `task reset` | Delete all tasks |
| `task clear` | Clear history |
| `task help` | Help |

---

## Example

```bash
$ task list

▶ TASKS

st  id     dl   content

○   a0629  5h   "Create Landing Page"
○   1af20  2h   "Deploy API"
✗   9cd31  0h   "Write README"

PROGRESS
█████░░░░░ 50%
```

---

## Complete a task

```bash
task check a0629
```

```
✔ Task a0629 checked and added to history
```

---

## History

```bash
task history
```

```
▶ HISTORY

✔ a0629  Create Landing Page
✔ 91ab2  Deploy API
✔ e8291  Publish package
```

---

## Project Structure

```
src
├── models
├── repository
├── routes
├── service
├── utils
├── index.ts
```

---

## Database

TaskMe stores everything inside a single file.

```text
TASKME.json
```

Example:

```json
{
  "tasks": [],
  "history": []
}
```

---

## Roadmap

- [x] Tasks
- [x] History
- [x] Deadlines
- [x] Restore
- [x] Edit
- [ ] Users
- [ ] Tabs
- [ ] Categories
- [ ] Search
- [ ] Interactive Mode (TUI)
- [ ] Cloud Sync

---

## Contributing

Contributions are welcome.

Open an issue or submit a Pull Request.

---

## Author

Made by **Lapolli**

GitHub

https://github.com/lapollivinicius