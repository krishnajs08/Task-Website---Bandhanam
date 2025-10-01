const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/ds");


connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);

app.get('/',(res,req) =>{
  res.send({
    asctiveStatus:true,
    error:false,
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
