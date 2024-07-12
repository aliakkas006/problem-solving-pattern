/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Time Complexity -> O(n)
 * Space Complexity -> O(n)
 */
const productExceptSelf = (nums) => {
  const n = nums.length;
  if (n === 0) return [];

  const result = new Array(n);

  // Calculate the product of elements to the left of each element
  let lefProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = lefProduct;
    lefProduct *= nums[i];
  }

  // Calculate the product of elements to the right of each element and update the result
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
