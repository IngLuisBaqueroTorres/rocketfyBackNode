const getSensorsService = require('../services/sensorsService').getSensors;
const postSensorService = require('../services/sensorsService').postSensor;
const getSensorService = require('../services/sensorsService').getSensor;

const getSensors = async (req, res) => {
  const response = await getSensorsService();
  res.send(response);
};

const postSensor = async (req, res) => {
  const response = await postSensorService(req);
  res.send(response);
};

const getSensor = async (req, res) => {
  const response = await getSensorService(req);
  res.send(response);
};

module.exports = { postSensor, getSensors, getSensor };
