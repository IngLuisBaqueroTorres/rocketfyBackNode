const express = require('express');
const { postSensor, getSensors, getSensor } = require('../controllers/sensorsController');

const router = express.Router();

router.post("/", postSensor);

router.get("/", getSensors);

router.get("/:sensor_id", getSensor);

module.exports = router
