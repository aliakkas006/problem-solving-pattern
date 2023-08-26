def missingNumber(nums):
    res = len(nums)

    for i in range(len(nums)):
        res += (i - nums[i])
    
    return res


print(missingNumber([3, 0, 1]))