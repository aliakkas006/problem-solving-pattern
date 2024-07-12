/**
 * @param {string} str
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (str, words) => {
  const result = [];
  const wordLen = words[0].length;
  const wordCount = words.length;
  const totalLen = wordLen * wordCount;

  if (str.length < totalLen) return result;

  const wordMap = {};

  for (const word of words) wordMap[word] = (wordMap[word] || 0) + 1;

  for (let i = 0; i <= str.length - totalLen; i++) {
    const seenWords = {};
    let j = 0;

    while (j < wordCount) {
      const left = i + j * wordLen;
      const right = left + wordLen;
      const currWord = str.slice(left, right);

      if (!(currWord in wordMap)) break;

      seenWords[currWord] = (seenWords[currWord] || 0) + 1;

      if (seenWords[currWord] > wordMap[currWord]) break;

      j++;
    }

    if (j === wordCount) result.push(i);
  }

  return result;
};

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));
