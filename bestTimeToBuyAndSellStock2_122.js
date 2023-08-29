/**
 * Greedy technique
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let max_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max_profit += prices[i] - prices[i - 1];
    }
  }

  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
