const express = require('express');
const router = express.Router();
const Usage = require('../models/usageModel');

// Get all usage records
router.get('/', async (req, res) => {
  try {
    const usage = await Usage.find();
    res.json(usage);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add new usage record
router.post('/', async (req, res) => {
  const { customerId, totalUsage, usageDate } = req.body;
  const usage = new Usage({ customerId, totalUsage, usageDate });

  try {
    await usage.save();
    res.status(201).json(usage);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;