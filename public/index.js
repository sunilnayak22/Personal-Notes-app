// GET all notes
async function getNotes() {

    const response = await fetch("/api/notes");

    const notes = await response.json();

    displayNotes(notes);
}


// Display notes
function displayNotes(notes) {

    const container = document.getElementById("notes");

    container.innerHTML = "";

    notes.forEach(note => {

      const div = document.createElement("div");
div.className = "note";

const title = document.createElement("h3");
title.textContent = note.title;

const description = document.createElement("p");
description.textContent = note.description;

const button = document.createElement("button");
button.textContent = "Delete";
button.className = "delete-btn";
button.onclick = () => deleteNote(note.id);

div.append(title, description, button);
container.appendChild(div);
    });
}


// POST new note
async function addNote() {

    const title = document.getElementById("title").value;

    const description = document.getElementById("description").value;

    if (!title || !description) return;

    await fetch("/api/notes", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title,
            description
        })
    });

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    getNotes();
}


// DELETE note
async function deleteNote(id) {

    await fetch(`/api/notes/${id}`, {
        method: "DELETE"
    });

    getNotes();
}


// SEARCH notes
async function searchNotes() {

    const search = document.getElementById("search").value;

    const response = await fetch(
        `/api/search?title=${encodeURIComponent(search)}`
    );

    const result = await response.json();

    displayNotes(result);
}


getNotes();