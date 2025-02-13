/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @return {string}
 */

const encode = (strs) => {
  let encoded = '';

  for (const str of strs) {
    // Prefix each string with its length and a delimiter (#)
    encoded += `${str.length}#${str}`; // "5#hello5#world"
  }

  return encoded;
};

console.log('Encoded: ', encode(['hello', 'world']));

/**
 * Decodes a single string to a list of strings.
 * @param {string} str
 * @return {string[]}
 */

const decode = (str) => {
  const decoded = [];
  let i = 0;

  while (i < str.length) {
    // Find the position of the delimiter (#)
    const delimiterIndex = str.indexOf('#', i);

    // Extract the length of the string
    const length = parseInt(str.substring(i, delimiterIndex)); // 5

    // Extract the string based on the length
    const extractedStr = str.substring(
      delimiterIndex + 1,
      delimiterIndex + 1 + length
    ); // "hello"

    // Add the extracted string to the decoded list
    decoded.push(extractedStr);

    // Move the index to the start of the next string
    i = delimiterIndex + 1 + length;
  }

  return decoded; // [ 'hello', 'world' ]
};

console.log('Decoded: ', decode('5#hello5#world'));
