const nums = [1, 2, 3, 1, 2, 1, 1, 3];

const containsDuplicate = (arr) => {
  const filterArr = [... new Set(arr)];
  console.log(filterArr);
  return filterArr.length !== arr.length;
};

const duplicate = containsDuplicate(nums);
console.log(duplicate);


/* 
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
*/
