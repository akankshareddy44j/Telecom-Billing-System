const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  customerId: { type: String, required: true },
  totalUsage: { type: Number, required: true },
  usageDate: { type: Date, required: true }
});

module.exports = mongoose.model('Usage', usageSchema);