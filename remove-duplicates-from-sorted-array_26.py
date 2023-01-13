from typing import List

arr = [1, 1, 1, 2, 3, 4, 4, 5]

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 0:
            return 0
        
        j = 1

        for i in range(1, n):
            if nums[i] != nums[i - 1]:
                nums[j] = nums[i]
                j += 1

        return j


object = Solution()
result = object.removeDuplicates(arr)

print(result)