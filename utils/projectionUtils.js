function calculateProjection(finance) {
    const years = 5;
    let balance = finance.savings;
    const result = [];
  
    for (let i = 1; i <= years; i++) {
      balance += (finance.income - finance.expenses) * 12;
      result.push({ year: i, balance });
    }
  
    return result;
  }
  
  module.exports = { calculateProjection };
  