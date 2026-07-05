<div align="center">

# TaskMe

```
██████ ▄████▄ ▄█████ ██ ▄█▀ ██▄  ▄██ ██████ ██
  ██   ██▄▄██ ▀▀▀▄▄▄ ████   ██ ▀▀ ██ ██▄▄   ██
  ██   ██  ██ █████▀ ██ ▀█▄ ██    ██ ██▄▄▄▄ ▄▄
```

> ⚡ A fast, beautiful and **100% local** task manager for your terminal.

Keep your tasks **inside each project**, where you already work.

<p>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![JSON](https://img.shields.io/badge/Database-JSON-black)

</p>

</div>

---

## Why TaskMe?

Unlike cloud task managers, **TaskMe stores everything locally**.

Every project has its own task list through a simple `TASKME.json` file.

✅ No account

✅ No internet

✅ No external database

✅ No configuration

Just open your project and continue working.

---

# 🎬 Preview

> Place one or two GIFs here.

<p align="center">

<!-- GIF 1 -->

<img src="./assets/demo-list.gif" width="800">

<br><br>

<!-- GIF 2 -->

<img src="./assets/demo-check.gif" width="800">

</p>

---

# ✨ Features

- ⚡ Zero configuration
- 📁 Project-based tasks
- 💾 Local JSON database
- ⏰ Deadlines
- 📜 Task history
- ♻️ Restore completed tasks
- 🎨 Beautiful terminal output
- 🔓 Open Source

---

# 📦 Installation

### npm

```bash
npm install -g taskme
```

### bun

```bash
bun add -g taskme
```

---

# 🚀 Getting Started

Initialize TaskMe inside your project.

```bash
task init
```

This creates:

```
TASKME.json
```

Each project keeps its own independent tasks.

---

# 📚 Commands

| Command | Description |
|----------|-------------|
| `task list` | List pending tasks |
| `task add` | Add a task |
| `task edit` | Edit a task |
| `task check` | Complete a task |
| `task history` | View completed tasks |
| `task restore` | Restore a task |
| `task remove` | Delete a task |
| `task all` | Show all tasks |
| `task reset` | Remove all tasks |
| `task clear` | Clear history |

---

# 💻 Example

```bash
task list
```

```text
▶ TASKS

○ a0629  5h  Create Landing Page
○ 1af20  2h  Deploy API
✗ 9cd31  0h  Write README

█████░░░░░ 50%
```

Complete a task:

```bash
task check a0629
```

```text
✔ Task completed.
```

---

# 🏗️ Stack

- 🔷 TypeScript
- 🟢 Node.js
- 📦 Bun
- 📄 JSON Storage

---

# 📂 Project Structure

```
src
├── models
├── repository
├── routes
├── service
├── utils
└── index.ts
```

---

# 🗺️ Roadmap

- [x] Tasks
- [x] History
- [x] Deadlines
- [x] Restore
- [x] Edit
- [ ] Categories
- [ ] Search
- [ ] Interactive TUI
- [ ] Tabs
- [ ] Cloud Sync (optional)

---

# 🤝 Contributing

Pull requests are welcome.

If you have ideas or found a bug, open an issue.

---

# 👨‍💻 Author

**Lapolli**

GitHub:
https://github.com/lapollivinicius