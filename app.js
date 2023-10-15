const express = require("express");

const app = express();
app.use(express.json());

const tourRouter = require("./routes/tourRoutes");

app.use("/api/tours", tourRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "route is not defined",
  });
});

module.exports = app;
