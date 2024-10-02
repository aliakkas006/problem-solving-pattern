/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (intervals.length === 0) return [];

  // Sort intervals by their start time
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0]; // Previous interval = [1, 3]
  let res = [prev]; // Result array with the first interval already in = [1, 3]

  // Iterate through sorted intervals
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      // There is overlap, merge intervals by updating the end time
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // No overlap, add the current interval to the result
      res.push(curr);
      prev = curr;
    }
  }

  return res;
};

// Example usage
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]
