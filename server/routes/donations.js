const express = require("express");
const router = express.Router();
const Donation = require("../models/donation");

// Add donation
router.post("/add", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get stats
router.get("/stats", async (req, res) => {
  const donations = await Donation.find({});
  const totalMeals = donations.reduce((sum, d) => sum + d.mealsProvided, 0);
  const donorCount = new Set(donations.map(d => d.donorName)).size;
  res.json({ totalMeals, donorCount, donations });
});

module.exports = router;
