const express = require("express");
const path = require("path")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let notes = [
    {
        id: 1,
        title: "Learning Node.js",
        description: "Understanding backend development"
    },
    {
        id: 2,
        title: "Learning Express",
        description: "Practicing REST APIs"
    }
];

// GET all notes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// GET single note
app.get("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    const note = notes.find(n => n.id === id);

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(note);
});

// POST new note
app.post("/api/notes", (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            message: "Title and description are required"
        });
    }

    const newNote = {
        id: Date.now(),
        title,
        description
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

// DELETE note
app.delete("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    const exists = notes.some(n => n.id === id);

    if (!exists) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    notes = notes.filter(n => n.id !== id);

    res.json({
        message: "Note deleted successfully"
    });
});

// SEARCH notes
app.get("/api/search", (req, res) => {
    const search = req.query.title?.toLowerCase() || "";

    const result = notes.filter(note =>
        note.title.toLowerCase().includes(search)
    );

    res.json(result);
});

module.exports = app;