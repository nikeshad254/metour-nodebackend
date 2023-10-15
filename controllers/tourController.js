exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      msg: "connected successfully",
    },
  });
};
