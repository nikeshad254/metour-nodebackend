const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "tour name is required"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "tour price is required"],
  },
  discountedPrice: {
    type: Number,
    validate: {
      validator: function () {
        return this.discountedPrice < this.price;
      },
    },
  },
  desc: {
    type: String,
    trim: true,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
