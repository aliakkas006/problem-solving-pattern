/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let windowStart = 0;
  let windowSum = 0;
  let minLen = Infinity;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    // Add the next element to the window
    windowSum += nums[windowEnd];

    // Condition to shrink window
    while (windowSum >= target) {
      // Update the min length
      minLen = Math.min(minLen, windowEnd - windowStart + 1);

      // Remove the element from window start
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

