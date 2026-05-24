"use strict"
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d === 0) {
    let root = -b / (2 * a);
    return [root];
  } else {
    let sqrtD = Math.sqrt(d);
    let root1 = (-b + sqrtD) / (2 * a);
    let root2 = (-b - sqrtD) / (2 * a);
    return [root1, root2];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths;

  if (
      isNaN(percent) ||
      isNaN(contribution) ||
      isNaN(amount) ||
      isNaN(countMonths)
  ) {
    return false;
  }

  const monthlyRate = percent / 100 / 12;
  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
  const total = monthlyPayment * countMonths;
  return Math.round(total * 100) / 100;
}