/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * Key Variables:
    right - left + 1: This represents the size of the current window (substring).
    maxFrequency: This is the frequency of the most common character in the current window.
    k: This is the maximum number of replacements allowed.
    right - left + 1 - maxFrequency: Number of characters that are not the most frequent character. These are the characters that need to be replaced.
 */
const characterReplacement = (s, k) => {
  const n = s.length;
  const charCount = new Array(26).fill(0); // Frequency count of characters in the window
  let maxLen = 0; // Length of the longest valid substring
  let maxFreq = 0; // Maximum frequency of any character in the window
  let left = 0; // Left pointer of the sliding window

  for (let right = 0; right < n; right++) {
    // Update the frequency of the current character
    const charIndex = s.charCodeAt(right) - 'A'.charCodeAt(0);
    charCount[charIndex]++;

    // Update the maximum frequency in the window
    maxFreq = Math.max(maxFreq, charCount[charIndex]);

    // If the number of replacements required exceeds k, move the left pointer
    if (right - left + 1 - maxFreq > k) {
      const leftCharIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
      charCount[leftCharIndex]--;
      left++;
    }

    // Update the maximum length of the valid substring
    maxLen = Math.max(maxLen, right - left + 1);
  }

  //   console.log(charCount) [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,]
  //   console.log(maxFreq)   2
  // console.log(maxLen)  4

  return maxLen;
};

// Example usage:
const s = 'ABAB',
  k = 2;

const res = characterReplacement(s, k);
// console.log(res);
