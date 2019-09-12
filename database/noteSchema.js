const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
      minlength: 15,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('note', noteSchema);
