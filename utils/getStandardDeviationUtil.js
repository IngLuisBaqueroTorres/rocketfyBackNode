
function getStandardDeviation(data){

  const dataObject = data.data.data;

  const val2 = Object.keys(dataObject[0])[1]
  const val3 = Object.keys(dataObject[0])[2]

  const sensor2 = [];
  const sensor3 = [];

  for(const item of dataObject) {
    sensor2.push(item[val2]);
    sensor3.push(item[val3]);
  }

  const standardDeviation1 = standardDeviation(sensor2)
  const standardDeviation2 = standardDeviation(sensor3)

  return { [val2]: standardDeviation1, [val3]: standardDeviation2 };
}

function standardDeviation(data) {

  const mean = data.reduce((acc, item) => acc + item) / data.length;

  const squaredDifferences = data.map((item) => Math.pow(item - mean, 2));
  const squaredDifferencesSum = squaredDifferences.reduce((acc, item) => acc + item);

  const standardDeviation = Math.sqrt(squaredDifferencesSum / data.length);

  return standardDeviation;
}

module.exports = { getStandardDeviation }
