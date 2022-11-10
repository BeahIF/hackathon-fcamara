const User = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

exports.getUserById = async function (query, page, limit) {
  try {
    var user = User.findById(query).select('-password');
    return user;
  } catch (e) {
    // Log Errors
    throw Error('Error while Finding User');
  }
};

exports.getUsers = async function (query, page, limit) {
  try {
    const users = await User.find(query).select('-password');
    return users;
  } catch (e) {
    // Log Errors
    throw Error('Error while Finding User');
  }
};
// passar como parametro o _id ou email
exports.userExists = async function (identificador) {
  try {
    const key = mongoose.isValidObjectId(identificador) ? '_id' : 'email';
    const userId = await User.exists().where(key).equals(identificador);
    return userId ? true : false;
  } catch (e) {
    console.log(e);
    throw Error('Error while finding user');
  }
};

exports.getUserByEmail = async function (email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (e) {
    throw Error('Error while finding user');
  }
};
exports.create = async function (body) {
  try {
    let user = new User(body);
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(body.password, salt);
    user = await user.save();
    return user;
  } catch (e) {
    console.log(e);
    throw Error('Error while creating user');
  }
};

exports.updateUser = async function (id, body) {
  try {
    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);
    }

    const user = await User.findByIdAndUpdate(id, body, {
      new: true,
    });

    return user;
  } catch (e) {
    console.log(e);
    throw Error('Error while update user');
  }
};

exports.deleteUser = async function (userId) {
  try {
    await User.deleteOne({ _id: userId });
  } catch (e) {
    // Log Errors
    throw Error('Error while Finding User');
  }
};
