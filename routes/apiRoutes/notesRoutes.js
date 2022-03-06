const router = require('express').Router();
const {noteArray} = require('../../db/db.json');

const {
    createNewNote,
    removeNote
} = require ('../../lib/noteAddRemove.js');


router.get('/notes', (req, res) =>{
    const oldNotes = noteArray;
    res.json(oldNotes);
}
);

router.post('/notes', (req, res) => {
    req.body.id = noteArray.length.toString();
    const newNote = createNewNote(req.body, noteArray);
    res.json(newNote);
})

router.delete('/notes/:id', (req, res) => {
    removeNote(noteArray, req.params.id);
    res.json(noteArray);
})

module.exports = router;