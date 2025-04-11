const Finance = require("../models/financeModel");
const { calculateProjection } = require("../utils/projectionUtils");

const createFinance = async (req, res) => {
  try {
    const {
      age,
      monthlyIncome,
      monthlyFixedExpenses,
      monthlySavings,
      currentSavings,
      incomeGrowthRate,
      careerChange,
      newExpectedIncome,
      changeYear,
      financialGoals
    } = req.body;

    const data = await Finance.create({
      age,
      monthlyIncome,
      monthlyFixedExpenses,
      monthlySavings,
      currentSavings,
      incomeGrowthRate,
      careerChange,
      newExpectedIncome,
      changeYear,
      financialGoals,
      userId: req.user.userId
    });

    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProjection = async (req, res) => {
  try {
    const finance = await Finance.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!finance)
      return res.status(404).json({ message: "Finance data not found" });

    const projection = calculateProjection(finance);
    res.json({ finance, projection });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createFinance, getProjection };
