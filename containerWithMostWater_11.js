/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max_area = 0;

  while (left < right) {
    const curr_area = (right - left) * Math.min(height[left], height[right]);
    max_area = Math.max(max_area, curr_area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max_area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
