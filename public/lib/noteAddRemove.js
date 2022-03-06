const fs = require('fs');
const { findSourceMap } = require('module');
const path = require('path');

function createNewNote(body, noteArray) {
    const newNote = body;
    oldNotes.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({noteArray}, null, 2)
    );
    return newNote;
};

function removeNote(noteArray, id) {
    const deleteNote = parseInt(id);
    noteArray.splice(deleteNote, 1);


    for (let i = deleteNote; i< noteArray.length; i++) {
    noteArray[i].id = i.toString();
    };

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            noteArray}, null, 2)
        
    )

        }

module.exports = {
    createNewNote,
    removeNote
}