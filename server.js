require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");

const connectDB = () => {
  mongoose
    .connect(process.env.LOCAL_DB_URL)
    .then(() => {
      console.log("connected to mongo db");
    })
    .catch((err) => console.log(err.message));
};

const port = process.env.PORT || 7777;
app.listen(port, () => {
  console.log(`the app is running in port: ${port}`);
  connectDB();
});
