/**
 * @param {string} str
 * @return {number}
 */
const lengthOfLongestSubstring = (str) => {
  const charSet = new Set();
  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < str.length; end++) {
    // If the character is exist in set
    while (charSet.has(str[end])) {
      charSet.delete(str[start]);
      start++;
    }

    // If the character is not exist in the set
    charSet.add(str[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
