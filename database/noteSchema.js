const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

module.exports = new mongoose.Schema(
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
