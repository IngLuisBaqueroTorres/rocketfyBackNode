const { usersModel } = require('../models');
const bcrypt = require('bcrypt');
/**
 * Create a new user
 * @param {*} req
 * @param {*} res
 */
const postLoginUser = async (req, res) => {
  try {
    const { nickName, password } = req.body;

    const user = await usersModel.findOne({ nickName });

    if (!user) return res.status(401).send({ message: 'something went wrong' });

    //const isMatch = await bcrypt.compare(password, user.password);

    const isMatch = password == user.password;

    if (!isMatch) return res.status(401).send({ message: 'something went wrong' });

    return res.status(200).send({ message: isMatch });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
module.exports = { postLoginUser };
