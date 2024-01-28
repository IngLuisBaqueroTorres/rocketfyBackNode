const getUsersService = require('../services/userService').getUsers;
const getUserService = require('../services/userService').getUser;
const postUserService = require('../services/userService').postUser;
const updateUserService = require('../services/userService').updateUser;
const deleteUserService = require('../services/userService').deleteUser;

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
  const response = await getUsersService();
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response);
};
/**
 * Get one user
 * @param {*} req
 * @param {*} res
 */
const getUser = async (req, res) => {
  const response = await getUserService();
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response)
};
/**
 * Create a new user
 * @param {*} req
 * @param {*} res
 */
const postUser = async (req, res) => {
  const response = await postUserService(req);
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response);
 };
/**
 * Update an user
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
  const response = await updateUserService(req);
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response);
};
/**
 * Delete an user
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async (req, res) => {
  const response = await deleteUserService(req);
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response);
};

module.exports = { getUsers, postUser, updateUser, deleteUser, getUser };
