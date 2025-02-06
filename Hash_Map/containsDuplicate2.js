/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      // Check if the difference in indices is <= k
      if (i - map.get(nums[i]) <= k) return true;
    }
    
    // Update the index of the current element in the map
    map.set(nums[i], i);
  }

  return false;
};

// Example usage:
const nums = [1, 2, 3, 1, 2, 3],
  k = 2;
console.log(containsNearbyDuplicate(nums, k));
