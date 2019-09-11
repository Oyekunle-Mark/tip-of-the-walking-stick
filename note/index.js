const router = require('express').Router();
const { getNotes, addNote } = require('./noteController');

router.get('/notes', getNotes);
router.post('/note', addNote);

module.exports = router;
