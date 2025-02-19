/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Time Complexity -> O(n), where n is the size of the input array.
 * Space Complexity -> O(m), where m is the number of unique elements in the array.
 */
const topKFrequent = (nums, k) => {
  // Step 1: Count the frequency of each element
  const freqMap = new Map(); // { 1 => 3, 2 => 2, 3 => 1 }
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Convert the hash map to an array of [num, freq] pairs
  const numFreqArr = Array.from(freqMap.entries()); // [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]

  // Step 3: Sort the array by frequency in descending order
  numFreqArr.sort((a, b) => b[1] - a[1]); // [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]

  // Step 4: Extract the top k elements
  const result = numFreqArr.slice(0, k).map(([num]) => num); // [1, 2]; The ([num]) syntax is array destructuring. It extracts the first element of each pair (num) and ignores the second element (freq).

  return result;
};

// Example usage:
const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));
