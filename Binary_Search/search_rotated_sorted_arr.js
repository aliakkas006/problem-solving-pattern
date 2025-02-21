/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  // Perform Binary Search to find the target element
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // If the target is found at mid, return the index
    if (nums[mid] === target) return mid;

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // If the target is within the sorted left half, search in the left half
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      // If the right half is sorted, check if the target is within the sorted right half
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  // If the target is not found, return -1
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target)); // 4
