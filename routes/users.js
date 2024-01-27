const express = require('express');
const { getUsers, getUser, postUser, updateUser, deleteUser } = require('../controllers/usersController');
const router = express.Router();

router.get("/", getUsers);

router.post("/", postUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router
