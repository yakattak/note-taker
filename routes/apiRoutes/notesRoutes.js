const router = require('express').Router();

const res = require('express/lib/response');
const notes = require('../../db/db.json');

const {
    createNewNote,
    removeNote
} = require ('../../lib/noteAddRemove.js');


router.get('/notes', (req, res) =>{
    const oldNotes = notes;
    res.json(oldNotes);
}
);

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
})

router.delete('/notes/:id', (req, res) => {
    removeNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;