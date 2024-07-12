/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const charCount = {}; // to store the count of characters in the magazine

  // Count characters in the magazine
  for (const char of magazine) charCount[char] = (charCount[char] || 0) + 1;

  // Check if characters in the ransom note can be formed from the magazine
  for (const char of ransomNote) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};

const ransomNote = 'aabb';
const magazine = 'aabbc';
console.log(canConstruct(ransomNote, magazine));
