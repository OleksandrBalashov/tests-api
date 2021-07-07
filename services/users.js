const { User } = require('../model');

const findUser = filter => {
  return User.findOne(filter);
};

const addUser = ({ email, password }) => {
  const newUser = new User({ email });
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
