/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
  const length = nums.length;
  if (length === 0) return 0;

  let j = 1;

  for (let i = 1; i < length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
