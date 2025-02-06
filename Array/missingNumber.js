/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time Complexity -> O(n)
 * Space Complexity -> O(1)
 */
const missingNumber = (nums) => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
};
