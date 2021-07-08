const { User } = require('../model');

const findUser = filter => {
  return User.findOne(filter);
};

const addUser = ({ email, password, googleAuth }) => {
  const newUser = new User({ email, googleAuth });
  password ? newUser.setPassword(password) : null;

  return newUser.save();
};

const findByIdAndUpdate = (id, body) => {
  return User.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  findUser,
  addUser,
  findByIdAndUpdate,
};
