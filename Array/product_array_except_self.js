/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const n = nums.length;
  const ans = new Array(n).fill(1);

  // First pass: Compute the product of all elements to the left of each index
  let leftProd = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = leftProd;
    leftProd *= nums[i];
  }

  //   console.log(ans)   [ 1, 1, 2, 6 ]

  // Second pass: Compute the product of all elements to the right of each index
  let rightProd = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= rightProd;
    rightProd *= nums[i];
  }

  //   console.log(ans);  [ 24, 12, 8, 6 ]

  return ans;
};

// Example usage:
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
