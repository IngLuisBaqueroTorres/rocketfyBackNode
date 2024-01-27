const express = require('express');
const { postLoginUser } = require('../controllers/loginController');

const router = express.Router();

router.post("/", postLoginUser);

module.exports = router
