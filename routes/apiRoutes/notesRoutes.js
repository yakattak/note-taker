const router = require('express').Router();

const notes = require('../../db/db.json');

const {
    createNewNote,
    removeNote
} = require ('../../lib/notes.js');
