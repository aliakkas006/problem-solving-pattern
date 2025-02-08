/* 
    Time Complexity -> O(nlogn)
    Space Complexity -> O(1)
*/

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  const partition = (left, right) => {
    let pivot = arr[right]; // Choose pivot as the last element
    let i = left; // i is the partition index (where the pivot will end up)

    // Travarse the Array
    for (let j = left; j < right; j++) {
      // If arr[j] is less than or equal to pivot (descending order)
      if (arr[j] <= pivot) {
        // Swap element at i with element at j
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++; // Move partition index forward
      }
    }

    // Swap pivot into its correct place
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i; // Return pivot's final index
  };

  // If the left index is less than the right index
  if (left < right) {
    const pivotIndex = partition(left, right); // Partition the array
    quickSort(arr, left, pivotIndex - 1); // Sort left half
    quickSort(arr, pivotIndex + 1, right); // Sort right half
  }
};

// Example usage
const arr = [10, 7, 8, 9, 1, 5];
quickSort(arr);
console.log(arr); // Output: [1, 5, 7, 8, 9, 10]
