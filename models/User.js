const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'User must have an E-mail'],
    validate: [validator.isEmail, 'Enter a valid E-mail'],
  },
  password: {
    type: String,
    minlength: 6,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Confirm your password'],
    validate: {
      validator: function(field) {
        return field === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  shipppingAddress: String,
});

module.exports = model('User', userSchema);
