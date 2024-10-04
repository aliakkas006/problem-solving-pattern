/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // Add all the intervals that come before the new interval
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge all overlapping intervals with the new interval
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Add the remaining intervals after the new interval
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

// Example usage
const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];

console.log(insert(intervals, newInterval));
