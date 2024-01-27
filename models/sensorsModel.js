const mongoose = require('mongoose')

const SensorsSchema = new mongoose.Schema({
  sensor_id: {
    type: Number
  },
  sensor_name: {
    type: String
  },
  data: {
    type: Object
  }

},
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("sensors", SensorsSchema)
