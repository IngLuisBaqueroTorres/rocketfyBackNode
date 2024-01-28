const { sensorsModel } = require('../models');
const getStandardDeviation = require('../utils/getStandardDeviationUtil').getStandardDeviation;
const getTrend = require('../utils/getTrendUtil').getTrend;

async function getSensors() {
  try {
    let data = await sensorsModel.find({});

    let groupedData = data.reduce((acc, item) => {
      let { sensor_id, sensor_name } = item;
      let sensorId = sensor_id;
      let sensorName = sensor_name;

      let sensorData = acc.find(({ sensor_id, sensor_name }) => sensor_id === sensorId && sensor_name === sensorName);

      if (!sensorData) {

        acc.push({
          sensor_id: sensorId,
          sensor_name: sensorName,
          data: []
        });
        sensorData = acc[acc.length - 1];
      }
      sensorData.data.push(...(Array.isArray(item.data) ? item.data : [item.data]));

      return acc;
    }, []);

    return (groupedData);
  } catch (err) {
    return ({ message: err.message, status: err.status });
  }
}

async function postSensor(sensor) {
  try {
    const { body } = sensor
    const data = await sensorsModel.create(body);
    return data;;
  } catch (err) {
    return ({ message: err.message, status: err.status });
  }
}

async function getSensor(sensor){
  try {
    const { sensor_id } = sensor.params;

    const dataSensor = await sensorsModel.find({ sensor_id: sensor_id });

    if (!dataSensor) return ({message:'Sensor does not exist', status: 404});

    let groupedData = dataSensor.reduce((acc, item) => {
      let { sensor_id, sensor_name } = item;
      let sensorId = sensor_id
      let sensorName = sensor_name

      let sensorData = acc.find(({ sensor_id }) => sensor_id === sensorId);

      if (!sensorData) {

        acc.push({
          sensor_id: sensorId,
          sensor_name: sensorName,
          data: []
        });
        sensorData = acc[acc.length - 1];
      }

      sensorData.data.push(...(Array.isArray(item.data) ? item.data : [item.data]));


      return acc;
    }, []);

    const data = groupedData[0].data;
    const val1 = Object.keys(data[0])[0]
    const val2 = Object.keys(data[0])[1]
    const val3 = Object.keys(data[0])[2]

    const averages =
      data.reduce((acc, item) => {
        const [value1, value2, value3] = Object.values(item);

        if (Number(value1) === value1) acc[val1] += value1;
        if (Number(value2) === value2) acc[val2] += value2;
        if (Number(value3) === value3) acc[val3] += value3;

        return acc;
      }, { [val1]: 0, [val2]: 0, [val3]: 0 })

    averages[val2] = averages[val2] / data.length;
    averages[val3] = averages[val3] / data.length;

    const standardDeviation = getStandardDeviation({ "data": groupedData[0] })
    const trend = getTrend(groupedData[0]);
    return({
      "data": groupedData[0],
      "averages": averages,
      "standardDeviation": standardDeviation,
      "trend": trend
    });

  } catch (err) {
    return({ message: "sensor not found", status: err.status});
  }
}
module.exports = { getSensors, postSensor, getSensor }
