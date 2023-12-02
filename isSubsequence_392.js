/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time Complexity -> O(n)
 * Space Complexity -> O(1)
 */

const isSubsequence = (s, t) => {
  if (s.length === 0 || t.length === 0) return false;

  let sPtr = 0;
  let tPtr = 0;

  while (sPtr < s.length && tPtr < t.length) {
    if (s[sPtr] === t[tPtr]) sPtr++;
    tPtr++;
  }

  return sPtr === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
