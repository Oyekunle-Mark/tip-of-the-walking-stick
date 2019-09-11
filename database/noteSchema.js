const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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
});
