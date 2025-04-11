const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  income: Number,
  expenses: Number,
  savings: Number,
  goal: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Finance", financeSchema);
