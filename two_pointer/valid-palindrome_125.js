/**
 * @param {string} s
 * @return {boolean}
 * Time Complexity -> O(n)
 */
const isPalindrome = (s) => {
  if (s.length === 0) return true;

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
