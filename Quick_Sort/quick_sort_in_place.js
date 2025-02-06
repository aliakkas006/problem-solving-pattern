/* 
    Time Complexity -> O(nlogn)
    Space Complexity -> O(1)
*/

const partition = (arr, low, high) => {
  const pivot = arr[high]; // Choosing pivot as the last element
  let i = low - 1;  // Index of smaller element

  for (let j = low; j < high; j++) {
    // If the current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++;  // Increment index of smaller element
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap 
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot into position
  return i + 1; // Return pivot index
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
    // If the low index is less than the high index
  if (low < high) {
    const pivotIndex = partition(arr, low, high); // Partition the array
    quickSort(arr, low, pivotIndex - 1); // Sort left half
    quickSort(arr, pivotIndex + 1, high); // Sort right half
  }
};

// Example usage
const arr = [10, 7, 8, 9, 1, 5];
quickSort(arr);
console.log(arr); // Output: [1, 5, 7, 8, 9, 10]
