const router = require('express').Router();
const {
  getNotes,
  addNote,
  getANote,
  editNote,
  deleteNote,
} = require('./noteController');

router.get('/notes', getNotes);
router.get('/notes/:id', getANote);
router.post('/note', addNote);
router.put('/notes/:id', editNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
