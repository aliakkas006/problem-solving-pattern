/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Time Complexity -> O(n)
 * Space Complexity -> O(n) (The space complexity is O(n) in the worst case, where all elements are unique and stored in the set.)
 */
const containsDuplicate = (nums) => {
  if (nums.length === 0) return false;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);   // {1, 2, 3}
  }

  return false;
};

// Example usage:
const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
