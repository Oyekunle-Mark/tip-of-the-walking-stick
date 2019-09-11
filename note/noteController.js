const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
} = require('../database/dbHelper');

const getNotes = async (req, res) => {
  const notes = await getAllNotes();

  res.status(200).json({
    status: 200,
    data: notes,
  });
};

const getANote = async (req, res) => {
  const { id } = req.params;

  const note = await getSingleNote(id);

  res.status(200).json({
    status: 200,
    data: note,
  });
};

const addNote = async (req, res) => {
  const note = await createNote(req.body);

  res.status(201).json({
    status: 201,
    data: note,
  });
};

const editNote = async (req, res) => {
  const { id } = req.params;

  const newNote = await updateNote(id, req.body);

  res.status(200).json({
    status: 200,
    data: newNote,
  });
};

module.exports = {
  getNotes,
  addNote,
  getANote,
  editNote,
};
