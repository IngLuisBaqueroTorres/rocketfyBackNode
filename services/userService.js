const { usersModel } = require('../models');

async function getUsers(){
  try {
    const data = await usersModel.find({});
    return data;
  } catch (err) {
    return({ message: err.message, status: err.status});
  }
}

async function getUser(userId) {
  try {
    const { id } = req.params;
    const user = await usersModel.findById(id);

    if (!user) {
      return ({ message: 'User not found', status: 404 });
    } else {
      return ({ data: user });
    }
  } catch (err) {
    console.error(err);
    return ({ message: err.message, status: err.status});
  }
}

async function postUser(user) {
  try {
    const { body } = user;

    return await usersModel.create(body)
  } catch (err) {
    return ({ message: err.message, status: err.status});
  }
}

async function updateUser(user){
  try {
    const { id } = user.params;
    const { body } = user;

    const updatedUser = await usersModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedUser) {
      return ({ message: 'User not found', status:404 });
    } else {
      return({ data: updatedUser });
    }
  } catch (err) {
    return ({ message: err.message, status:err.status });
  }
}

async function deleteUser(user) {
  try {
    const { id } = user.params;
    const deletedUser = await usersModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return ({ message: 'User not found', status: 404 });
    } else {
      return ({ message: 'User deleted successfully' });
    }
  } catch (err) {
    return ({ message: 'Internal server error', status:err.status });
  }
}
module.exports = { getUsers, getUser, postUser, updateUser, deleteUser }
