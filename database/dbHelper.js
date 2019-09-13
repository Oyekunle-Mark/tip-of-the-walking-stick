const Note = require('./noteSchema');

const getAllNotes = () =>
  Note.find({})
    .lean()
    .exec();

const getSingleNote = id =>
  Note.findById(id)
    .lean()
    .exec();

const createNote = note => Note.create(note);

const updateNote = (id, note) =>
  Note.findOneAndUpdate({ _id: id }, note, { new: true })
    .lean()
    .exec();

const removeNote = id =>
  Note.findByIdAndRemove(id)
    .lean()
    .exec();

module.exports = {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  removeNote,
};
