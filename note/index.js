const router = require('express').Router();
const { getNotes, addNote, getANote, editNote } = require('./noteController');

router.get('/notes', getNotes);
router.get('/notes/:id', getANote);
router.post('/note', addNote);
router.put('/notes/:id', editNote);

module.exports = router;
