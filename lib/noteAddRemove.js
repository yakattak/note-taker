const fs = require('fs');
const path = require('path');


//function to create new note and add it to database
function createNewNote(body, noteArray) {
    const newNote = body;
    noteArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({noteArray}, null, 2)
    );
    return newNote;
};

//functio to remove note
function removeNote(noteArray, id) {
    const deleteNote = parseInt(id);
    noteArray.splice(deleteNote, 1);

    //reassign IDs after removing note
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