function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regular = Math.min(hours, 8);
  const overtime = Math.max(hours - 8, 0);
  return Math.round(regular * rate + overtime * rate * 1.5);
}

module.exports = { isValidShift, calculatePay };