const arr = [3, 2, 3];
const target = 5;

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === target) 
    return [i, i + 1];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target)
      return [i, j];
    }
  }
};

const index = twoSum(arr, target);
console.log(index);