/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated, return the first element
  if (nums[left] < nums[right]) return nums[left];

  // Perform binary search to find the minimum element
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If the middle element is greater than the rightmost element, the minimum is in the right half
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }

  // When left == right, we've found the minimum element
  return nums[left];
};

// Example usage:
const nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));

/* 
Second iteration:
    left = 3, right = 4.
    mid = 3, nums[mid] = 1.
    Since 1 <= 2, the minimum is in the left half (including mid). Move right to 3.
*/
