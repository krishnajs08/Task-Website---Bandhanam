
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ["Bride", "Groom"], required: true },
  age: { type: Number, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  discrip: { type: String },
  profilePic: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
