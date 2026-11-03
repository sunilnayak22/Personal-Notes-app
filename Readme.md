# 📝 Personal Notes App

A simple and responsive Personal Notes Application built using HTML, CSS, JavaScript, Node.js and Express.js.

This project was created to practice backend development, REST APIs, HTTP methods and frontend-backend communication.

## 🚀 Features

- Create new notes with a title and description.
- View all saved notes.
- View individual notes using their ID.
- Delete existing notes.
- Search notes by title.
- Responsive UI for desktop and mobile devices.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML | Structure |
| CSS | Styling and responsive design |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | Server and REST APIs |

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| DELETE | `/api/notes/:id` | Delete a note |
| GET | `/api/search?title=value` | Search notes by title |

## 📂 Project Structure

```text
notes-app/
│
├── server.js
├── package.json
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2