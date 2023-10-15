const express = require("express");

const app = express();

const tourRouter = require("./routes/tourRoutes");

app.use("/api/tours", tourRouter);

module.exports = app;
