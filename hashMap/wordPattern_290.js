/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const hashMap = new Map();
  const words = s.split(' ');

  if (
    pattern.length !== words.length ||
    new Set(pattern).size !== new Set(words).size
  )
    return false;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (hashMap.has(char)) {
      if (hashMap.get(char) !== word) return false;
    } else {
      hashMap.set(char, word);
    }
  }

  return true;
};

// Example usage:
const pattern = 'abba';
const s = 'dog cat cat dog';

console.log(wordPattern(pattern, s));
