const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let maxSubArr = nums[0];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) currSum = 0;
    currSum += nums[i];
    maxSubArr = Math.max(maxSubArr, currSum);
  }

  return maxSubArr;
};

const result = maxSubArray(arr);

console.log(result);
