/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const map = new Map();
  let maxLength = 0;

  for (let num of nums) {
    // If the number is already part of a sequence, skip it

    if (!map.has(num)) {
      // Get the length of the sequences that can be extended on both sides
      const left = map.get(num - 1) || 0;
      const right = map.get(num + 1) || 0;

      // Current sequence length is the sum of the left and right lengths + 1 (for the current number)
      const currLength = left + right + 1;

      // Update the maximum length
      maxLength = Math.max(maxLength, currLength);

      // Update the boundaries of the sequence in the map
      map.set(num, currLength); // Set the current number to its sequence length
      map.set(num - left, currLength); // Update the left boundary
      map.set(num + right, currLength); // Update the right boundary
    }
  }

  return maxLength;
};

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output = 4
