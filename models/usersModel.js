const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  nickName: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }

},
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("users", UserSchema)
