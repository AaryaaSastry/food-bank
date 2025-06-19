const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

})

const empmodel = mongoose.model('emp', empSchema);
module.exports = empmodel;
