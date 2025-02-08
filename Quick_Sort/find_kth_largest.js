/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * How Partition Works in Quickselect?
 * If pivot index == k-1, we found our kth largest element.
 * If pivot index > k-1, search the left half.
 * If pivot index < k-1, search the right half.
 */
const findKthLargest = (nums, k) => {
  const partition = (left, right) => {
    let pivot = nums[right]; // Choose pivot as the last element
    let i = left; // i is the partition index (where the pivot will end up)

    // Travarse the Array
    for (let j = left; j < right; j++) {
      // If nums[j] is greater than or equal to pivot (descending order)
      if (nums[j] >= pivot) {
        // Swap element at i with element at j
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++; // Move partition index forward
      }
    }

    // Swap pivot into its correct place
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i; // Return pivot's final index
  };

  let left = 0,
    right = nums.length - 1;
  const target = k - 1;

  while (left <= right) {
    let pivotIndex = partition(left, right);

    if (pivotIndex === target) return nums[pivotIndex];
    else if (pivotIndex < target) left = pivotIndex + 1;
    else right = pivotIndex - 1;
  }

  return -1;
};

// Example
const nums = [3, 2, 1, 5, 6, 4],
  k = 2;
console.log(findKthLargest(nums, k)); // Output: 5
