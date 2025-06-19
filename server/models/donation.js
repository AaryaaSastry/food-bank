const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donorName: String,
  amount: Number,
  mealsProvided: Number,
  location: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", donationSchema);
