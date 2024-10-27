/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;

  // If s1 is longer than s2, no permutation possible
  if (len1 > len2) return false;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  // Count frequency of characters in s1
  for (let i = 0; i < len1; i++) {
    count1[s1.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i) - 97]++;
  }

  // Slide the window over s2
  for (let i = len1; i < len2; i++) {
    if (arraysMatch(count1, count2)) return true;

    // Update the window: remove left character and add right character
    count2[s2.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i - len1) - 97]--;
  }

  // Check the last window
  return arraysMatch(count1, count2);
};

// Helper function to compare if two frequency arrays are equal
const arraysMatch = (arr1, arr2) => {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

// Example usage:
const s1 = 'ab',
  s2 = 'eidbaooo';
console.log(checkInclusion(s1, s2));
