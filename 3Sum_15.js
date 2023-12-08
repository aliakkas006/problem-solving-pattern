/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [];
  const n = nums.length;

  if (n < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate values for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const three_sum = nums[i] + nums[left] + nums[right];
      if (three_sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for the second element
        while (left < right && nums[left] === nums[left + 1]) left++;

        // Skip duplicate values for the third element
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (three_sum < 0) left++;
      else right--;
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
