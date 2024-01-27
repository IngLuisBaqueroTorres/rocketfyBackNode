function getTrend(data) {
  const dataObject = data.data;

  const val2 = Object.keys(dataObject[0])[1]
  const val3 = Object.keys(dataObject[0])[2]

  const trend1 = trend(dataObject, val2)
  const trend2 = trend(dataObject, val3)

  return { [val2]: trend1, [val3]: trend2 };
}

function trend(dataObject, name){
  const average = dataObject.reduce((acc, item) => acc + item[name], 0) / dataObject.length;

  const differences = dataObject.map((item) => item[name] - average);
  const slope = differences.reduce((acc, difference) => acc + difference, 0) / differences.length;

  return slope;
}

module.exports = { getTrend }
