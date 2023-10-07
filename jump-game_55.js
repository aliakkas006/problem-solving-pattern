/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let maxJump = 0;

  for (let i = 0; i < nums.length; i++) {
    // If we can't reach this position, return false
    if (i > maxJump) return false;

    // Update the maximum reachable position
    maxJump = Math.max(maxJump, i + nums[i]);

    // If we can reach the last index, return true
    if (maxJump >= nums.length - 1) return true;
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
