var  mongoose = require('mongoose');

var user = mongoose.model('user', {
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {user};
