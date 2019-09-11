const { getAllNotes, createNote } = require('../database/dbHelper');

const getNotes = async (req, res) => {
  const notes = await getAllNotes();

  res.status(200).json({
    status: 200,
    data: notes,
  });
};

const addNote = async (req, res) => {
  const note = await createNote(req.body);

  res.status(201).json({
    status: 201,
    data: note,
  });
};

module.exports = {
  getNotes,
  addNote,
};
