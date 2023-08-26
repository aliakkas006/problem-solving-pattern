nums = [3,4,5,1,2]


def findMin(nums):
    res = nums[0]
    left, right = 0, len(nums) - 1

    while left <= right:
        if nums[left] < nums[right]:        # when the array is sorted, just return the min value between res and left index value
            res = min(res, nums[left])
            break
        
        mid = (left + right) // 2           # binary search
        res = min(res, nums[mid])

        if nums[mid] >= nums[left]:
            left = mid + 1
        else:
            right = mid - 1
    
    return res


output = findMin(nums)
print(output)


# Time Complexity -> O(log n)
# Space Complexity -> O(1)
