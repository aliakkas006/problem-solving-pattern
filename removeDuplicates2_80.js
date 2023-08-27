/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let j = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[j - 2]) {
      nums[j++] = nums[i];
    }
  }
  
  return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
