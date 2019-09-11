const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  removeNote,
} = require('../database/dbHelper');

const getNotes = async (req, res) => {
  try {
    const notes = await getAllNotes();

    res.status(200).json({
      status: 200,
      data: notes,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.errmsg,
    });
  }
};

const getANote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await getSingleNote(id);

    res.status(200).json({
      status: 200,
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.errmsg,
    });
  }
};

const addNote = async (req, res) => {
  try {
    const note = await createNote(req.body);

    res.status(201).json({
      status: 201,
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.errmsg,
    });
  }
};

const editNote = async (req, res) => {
  const { id } = req.params;

  try {
    const newNote = await updateNote(id, req.body);

    res.status(200).json({
      status: 200,
      data: newNote,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.errmsg,
    });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await removeNote(id);

    res.status(200).json({
      status: 200,
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.errmsg,
    });
  }
};

module.exports = {
  getNotes,
  addNote,
  getANote,
  editNote,
  deleteNote,
};
