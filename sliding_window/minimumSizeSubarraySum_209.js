/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let minLen = Infinity;
  let i = 0;
  let sum = 0;

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= target) {
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }

  return minLen !== Infinity ? minLen : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
