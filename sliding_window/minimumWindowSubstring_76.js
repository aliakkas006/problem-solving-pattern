/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const n = s.length;
  const m = t.length;

  // If t is empty or longer than s, return an empty string
  if (m === 0 || n < m) return '';

  // Create a frequency map for characters in t
  const tMap = new Map();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  // console.log(tMap);   { 'A' => 1, 'B' => 1, 'C' => 1 }

  // Variables to track the window
  let left = 0; // Left pointer of the window
  let minLen = Infinity; // Length of the minimum window
  let minStart = 0; // Starting index of the minimum window
  let required = tMap.size; // Number of unique characters in t str
  let formed = 0; // Number of unique characters in the current window that match t

  // Create a frequency map for characters in the current window
  const windowMap = new Map();

  // Traverse the string s with the right pointer
  for (let right = 0; right < n; right++) {
    const char = s[right];

    // Update the frequency of the current character in the window
    windowMap.set(char, (windowMap.get(char) || 0) + 1);

    // If the current character is in t and its frequency matches, increment formed
    if (tMap.has(char) && windowMap.get(char) === tMap.get(char)) formed++;

    // When the current window contains all characters of t, try to shrink the window
    while (left <= right && formed === required) {
      // Update the minimum window if the current window is smaller
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      // Move the left pointer to shrink the window
      const leftChar = s[left];
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);

      // If the character at the left pointer is in t and its frequency drops below required, decrement formed
      if (tMap.has(leftChar) && windowMap.get(leftChar) < tMap.get(leftChar))
        formed--;

      left++;
    }
  }

  // console.log(windowMap); {'A' => 1,'D' => 0,'O' => 0,'B' => 0,'E' => 0,'C' => 1,'N' => 1}

  // If no valid window is found, return an empty string
  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
};

const s = 'ADOBECODEBANC';
const t = 'ABC';
console.log(minWindow(s, t)); //BANC
