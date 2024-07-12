/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) return [map.get(complement), i];

    map.set(nums[i], i);
  }

  // If no solution is found, though the problem guarantees one solution.
  return [];
};

// Example usage
const nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
