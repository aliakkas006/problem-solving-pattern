nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


def maxSubArray(nums):
    if len(nums) == 0:
        return 0
        
    max_sub = nums[0]
    print(max_sub)
    cur_sum = 0

    for num in nums:
        if cur_sum < 0:
            cur_sum = 0

        cur_sum += num
        max_sub = max(max_sub, cur_sum)

    return max_sub


output = maxSubArray(nums)
# print(output)
