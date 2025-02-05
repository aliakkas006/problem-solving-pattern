/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  const result = [];

  function backtrack(start, path, target) {
    if (path.length === k && target === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (i > target) break; // Optimization: stop early if `i` exceeds target sum

      path.push(i);
      backtrack(i + 1, path, target - i); // Move to next number
      path.pop();
    }
  }

  backtrack(1, [], n);

  return result;
};
