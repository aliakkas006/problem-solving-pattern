/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let i = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[i++] = num;
    }
  }

  return i;
};

console.log(removeElement([3, 2, 2, 3], 3));
