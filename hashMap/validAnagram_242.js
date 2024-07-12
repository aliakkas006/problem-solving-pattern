/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  // If lengths are different, they can't be anagram
  if (s.length !== t.length) return false;

  const charCount = new Map();

  // Count the frequency of characters in string s
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1); // Map(5) { 'a' => 3, 'n' => 1, 'g' => 1, 'r' => 1, 'm' => 1 }
  }

  // Decrement the frequency of characters in string t
  for (let char of t) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1); // Map(5) { 'a' => 0, 'n' => 0, 'g' => 0, 'r' => 0, 'm' => 0 }
  }

  // Check if any character has non-zero frequency
  for (let val of charCount.values()) {
    if (val !== 0) return false;
  }

  return true;
};

// example usage:
const s = 'anagram';
const t = 'nagaram';

console.log(isAnagram(s, t));
