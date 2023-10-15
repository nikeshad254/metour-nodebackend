const Tour = require("../models/tourModel");

exports.getAllTours = async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: "success",
    tourLenght: tours.length,
    data: {
      tours,
    },
  });
};

exports.createTour = async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
