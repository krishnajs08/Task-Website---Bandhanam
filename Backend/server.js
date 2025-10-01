// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/ds");

// Connect to database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
