const getSensorsService = require('../services/sensorsService').getSensors;
const postSensorService = require('../services/sensorsService').postSensor;
const getSensorService = require('../services/sensorsService').getSensor;

const getSensors = async (req, res) => {
  const response = await getSensorsService();
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response);
};

const postSensor = async (req, res) => {
  const response = await postSensorService(req);
  if (response.message) return res.status(response.status).send({ message: response.message });
  res.send(response);
};

const getSensor = async (req, res) => {
  const response = await getSensorService(req);
  if (response.message) return res.status(404).send({ message: response.message });
  res.send(response);
};

module.exports = { postSensor, getSensors, getSensor };
