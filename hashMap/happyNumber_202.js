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
      let digit = number % 10; // Get the last digit of the number
      totalSum += digit * digit; // Square the digit and add it to the total sum
      number = Math.floor(number / 10); // Remove the last digit from the number
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
