require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Values
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

mongoose
  .connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //  useCreateIndex: true,
    //  useFindAndModify: false,
  })
  .then(console.log("[2] MongoDB Connected!"))
  .catch(err => {
    console.log(err, "error");
  });

app.listen(PORT, () => {
  console.log(`[1] Backend Server is running at Port ${PORT}`);
});
