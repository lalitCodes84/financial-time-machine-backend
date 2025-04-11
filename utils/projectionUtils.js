function calculateProjection(finance) {
    const years = 5;
    let balance = finance.currentSavings || 0;
    let income = finance.monthlyIncome || 0;
    const expenses = finance.monthlyFixedExpenses || 0;
    const monthlySavings = finance.monthlySavings || 0;
    const growthRate = finance.incomeGrowthRate || 0; // as percentage
    const changeYear = finance.changeYear || null;
    const newIncome = finance.newExpectedIncome || null;
  
    const result = [];
  
    for (let i = 1; i <= years; i++) {
      // Check if career change planned in this year
      if (changeYear && newIncome && i === changeYear) {
        income = newIncome;
      }
  
      // Annual growth rate applied (except if career change planned that year)
      if (!changeYear || i < changeYear) {
        income += income * (growthRate / 100);
      }
  
      // Monthly net savings (income - expenses + extra savings)
      const annualSavings = (income - expenses + monthlySavings) * 12;
      balance += annualSavings;
  
      result.push({
        year: i,
        balance: Math.round(balance),
      });
    }
  
    return result;
  }
  
  module.exports = { calculateProjection };
  