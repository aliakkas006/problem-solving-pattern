/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const seen = new Set();

  // Helper function to calculate the sum of squares of digits
  const getNext = (number) => {
    let totalSum = 0;
    while (number > 0) {
      let digit = number % 10;
      totalSum += digit * digit;
      number = Math.floor(number / 10);
    }
    return totalSum;
  };

  // Continue the process until n equals 1 or we detect a cycle
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
};

// Example usage:
const n = 19;
console.log(isHappy(n)); // Output: true

const n2 = 2;
console.log(isHappy(n2)); // Output: false
