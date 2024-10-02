/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const ranges = [];
  if (nums.length === 0) return ranges;

  let i = 0;

  while (i < nums.length) {
    let start = i;

    // Move i until the end of the current range
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) i++;

    // If start equals i, it's a single number; otherwise, it's a range
    if (start === i) ranges.push(`${nums[start]}`);
    else ranges.push(`${nums[start]}->${nums[i]}`);

    i++;
  }

  return ranges;
};

// example usage
const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums)); // Output: ["0->2","4->5","7"]
