/**
 * Dynamic Programming problem
 * @param {number[]} nums
 * @return {number}
 * Time Complexity -> O(n)
 * Space Complexity -> O(1)
 */
const jump = function (nums) {
  const n = nums.length;
  if (n <= 1) return 0;

  let jumps = 0; // Number of jumps needed
  let currMax = 0; // The maximum index we can reach with current jumps
  let farthest = 0; // The farthest index we can reach after taking a jump

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currMax) {
      jumps++;
      currMax = farthest;
    }
  }

  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));
