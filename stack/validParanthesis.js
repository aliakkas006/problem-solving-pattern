/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // create an empty stack to store opening brackets
  let stack = [];

  for (let c of s) {
    if (c === '(' || c === '{' || c === '[') {
      // if the character is an opening bracket
      stack.push(c);
    } else {
      // if the character is a closing bracket
      if (
        !stack.length ||
        (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === '}' && stack[stack.length - 1] !== '{') ||
        (c === ']' && stack[stack.length - 1] !== '[')
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  /**
   * if the stack is empty, all opening brackets have been matched with their corresponding closing brackets
   * so the string is valid, otherwise, there are unmatched opening brackets, so return false
   */

  return !stack.length;
};

// Example usage
const s = '()[]{}';
console.log(isValid(s));
