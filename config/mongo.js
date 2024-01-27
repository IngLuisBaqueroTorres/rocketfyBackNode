const mongoose = require('mongoose');

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI);
    console.log('*** CONNECTION RIGHT ***');
  } catch (err) {
    console.error('*** ERROR CONNECTION ***', err);
  }
};

module.exports = dbConnect;

