/**
 * @param {string} str
 * @return {number}
 */
const lengthOfLongestSubstring = (str) => {
  let charIndexMap = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    if (charIndexMap.has(str[right]))
      left = Math.max(charIndexMap.get(str[right]) + 1, left);

    charIndexMap.set(str[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
