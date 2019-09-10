const Note = require('./noteModel');

const getAllNotes = () => Note.find({}).exec();

const getSingleNote = id => Note.findById(id).exec();

const createNote = note => Note.create(note);

const updateNote = (id, note) =>
  Note.findOneAndUpdate(id, note, { new: true }).exec();

const removeNote = id => Note.findByIdAndRemove(id);

module.exports = {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  removeNote,
};
