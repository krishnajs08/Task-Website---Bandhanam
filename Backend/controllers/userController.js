
const User = require("../models/User");


exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllUsers = async (req, res) => {
  const { name, gender } = req.query;
  let query = {};
  if (name) query.name = { $regex: name, $options: "i" };
  if (gender) query.gender = gender;
  const users = await User.find(query);
  res.json(users);
};


exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};
