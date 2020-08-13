const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const transformModel = require('../utils/transformModel');

const userSchema = new Schema(
  {
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
      select: false,
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
  },
  {
    timestamps: true,
  },
);

// Hash user password
userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  user.password = await bcrypt.hash(this.password, 12);
  user.passwordConfirm = undefined;

  next();
});

// Transform user schema
userSchema.methods.toJSON = function() {
  return transformModel({
    schema: this,
    exclude: ['password', 'createdAt', 'updatedAt'],
  });
};

// Compare user password
userSchema.methods.comparePassword = async function(
  candidatePassword,
  userPassword,
) {
  const compare = await bcrypt.compare(candidatePassword, userPassword);

  return compare;
};

const User = model('User', userSchema);
module.exports = User;
