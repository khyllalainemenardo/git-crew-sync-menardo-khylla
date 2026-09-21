function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

const OVERTIME_THRESHOLD = 8;
const OVERTIME_MULTIPLIER = 1.5;

function calculatePay(hours, rate) {
  const regular = Math.min(hours, OVERTIME_THRESHOLD);
  const overtime = Math.max(hours - OVERTIME_THRESHOLD, 0);
  return Math.round(regular * rate + overtime * rate * OVERTIME_MULTIPLIER);
}

module.exports = { isValidShift, calculatePay };