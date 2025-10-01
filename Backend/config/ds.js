const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully".bgMagenta.white);
  } catch (error) {
    console.error("MongoDB Connection Failed".bgRed.white, error);
    process.exit(1);
  }
};

module.exports = connectDB;
