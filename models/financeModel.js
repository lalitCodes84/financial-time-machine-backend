const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  goal: { type: String, required: true },
  amount: { type: Number, required: true },
  targetYear: { type: Number, required: true }
});

const financeSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  monthlyIncome: { type: Number, required: true },
  monthlyFixedExpenses: { type: Number, required: true},
  monthlySavings: { type: Number, required: true },
  currentSavings: { type: Number, required: true },
  incomeGrowthRate: { type: Number, default: 0 }, // optional
  careerChange: { type: String, enum: ["Yes", "No"], default: "No" }, // optional
  newExpectedIncome: { type: Number }, // optional
  changeYear: { type: Number }, // optional
  financialGoals: [goalSchema], // array of goals
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Finance", financeSchema);
