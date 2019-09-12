const Note = require('./noteSchema');

const getAllNotes = () => Note.find({}).exec();

const getSingleNote = id => Note.findById(id).exec();

const createNote = note => Note.create(note);

const updateNote = (id, note) =>
  Note.findOneAndUpdate({ _id: id }, note, { new: true }).exec();

const removeNote = id => Note.findByIdAndRemove(id).exec();

module.exports = {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  removeNote,
};
