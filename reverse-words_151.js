/**
 * @param {string} s
 * @return {string}
 *
 * Time Complexity -> O(n+m)
 * Space Complexity -> O(n)
 */

const reverseWords = (s) => {
  const words = s.trim().replace(/\s+/g, ' ').split(' ');
  const revWords = words.reverse();
  const revStr = revWords.join(' ');

  return revStr;
  
  //   const splitStr = s.trim().replace(/\s+/g, ' ').split(' ')
  //   let j = 0;
  //   let arr = [];

  //   for (let i = splitStr.length - 1; i >= 0; i--) {
  //     arr[j++] = splitStr[i];
  //   }

  //   return arr.join(' ')
};

console.log(reverseWords('a good   example'));
