/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Time Complexity -> O(n)
 * Space Complexity -> O(n)
 */
const twoSum = (nums, target) => {
  // Create a map to store the indices of elements
  const map = new Map();

  // Traverse the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If the complement exists in the map, return the indices
    if (map.has(complement)) return [map.get(complement), i];

    // Otherwise, add the current element and its index to the map
    map.set(nums[i], i);
  }

  // If no solution is found, though the problem guarantees one solution.
  return [];
};

// Example usage
const nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
