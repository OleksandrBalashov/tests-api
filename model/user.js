const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');
const { nanoid } = require('nanoid');

const userSchema = Schema({
  email: {
    type: String,
    validate: [isEmail, 'invalid email'],
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: [true, 'Verify token is required'],
    default: () => nanoid(),
  },
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;
