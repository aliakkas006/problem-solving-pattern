nums = [1, 1, 1, 2, 2, 3]

class Solution:
    def removeDuplicates(self, nums):
        j = 1
        flag = False

        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] and flag == False:
                nums[j] = nums[i]
                j += 1
                flag = True
            
            if nums[i] != nums[i - 1]:
                nums[j] = nums[i]
                j += 1
                flag = False
        
        return j, nums[:j]


object = Solution()
result = object.removeDuplicates(nums)
print(result)