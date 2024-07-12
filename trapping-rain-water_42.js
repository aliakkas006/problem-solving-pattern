/**
 * @param {number[]} height
 * @return {number}
 *
 * Algorithmic Technique -> Two Pointers
 * Time Complexity -> O(n)
 * Space Complexity -> O(1)
 */
const trap = (height) => {
  if (height === null || height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let trappedWater = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      trappedWater += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      trappedWater += rightMax - height[right];
    }
  }

  return trappedWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
