/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time Complexity -> O(n)
 * Space Complexity -> O(n)
 */
const findDisappearedNumbers = (nums) => {
  if (nums.length === 0) return [];

  const set = new Set(nums); //  { 4, 3, 2, 7, 8, 1 }
  const res = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) res.push(i);
  }

  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
