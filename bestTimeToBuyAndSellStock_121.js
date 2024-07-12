/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      curr_profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, curr_profit);
    } else left = right;

    right++;
  }

  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
