/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
  const charCount = Array(26).fill(0);

  for (const char of chars) {
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
    charCount[charIndex]++;
  }

  function isWordFormed(word) {
    const wordCount = Array(26).fill(0);

    for (const char of word) {
      const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
      wordCount[charIndex]++;
      if (wordCount[charIndex] > charCount[charIndex]) {
        return false;
      }
    }

    return true;
  }

  let result = 0;

  for (const word of words) {
    if (isWordFormed(word)) result += word.length;
  }

  return result;
};

const words = ['cat', 'bt', 'hat', 'tree'];
const chars = 'atach';
const result = countCharacters(words, chars);
console.log(result);
