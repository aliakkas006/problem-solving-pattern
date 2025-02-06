const mergeSortInPlace = (arr, left = 0, right = arr.length - 1) => {
  // If the left index is greater than or equal to the right index, return
  if (left >= right) return;

  // Calculate the middle index
  const mid = Math.floor((left + right) / 2);

  // Recursively sort the left and right halves
  mergeSortInPlace(arr, left, mid); // Sort the left half
  mergeSortInPlace(arr, mid + 1, right); // Sort the right half
  merge(arr, left, mid, right); // Merge the sorted halves
};

const merge = (arr, left, mid, right) => {
  let leftArr = arr.slice(left, mid + 1); // Slice the left half
  let rightArr = arr.slice(mid + 1, right + 1); // Slice the right half

  let i = 0, // Index for the left half
    j = 0, // Index for the right half
    k = left; // Index for the main array

  // Merge the left and right halves back into the main array
  while (i < leftArr.length && j < rightArr.length) {
    // Compare the elements at the current indices and move the smaller element to the main array
    arr[k++] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];
  }

  while (i < leftArr.length) arr[k++] = leftArr[i++]; // Add any remaining elements from the
  while (j < rightArr.length) arr[k++] = rightArr[j++]; // left half
};

// Example usage
const arr = [10, 7, 8, 9, 1, 5];
mergeSortInPlace(arr);
console.log(arr); // Output: [1, 5, 7, 8, 9, 10]
