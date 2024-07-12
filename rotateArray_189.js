/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
  const n = nums.length;
  k %= n; // adjust k if it's greater than n

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  reverse(0, n - 1); // reverse the entire array
  reverse(0, k - 1); // reverse the first k elements
  reverse(k, n - 1); // reverse the remaining elements

  console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
