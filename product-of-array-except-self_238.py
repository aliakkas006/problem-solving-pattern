nums = [1, 2, 3, 4]


def productExceptSelf(nums):
    if len(nums) == 0:
        return []

    result = [1] * (len(nums))  # result = [1, 1, 1, 1]

    prefix = 1
    for i, num in enumerate(nums):
        result[i] = prefix  # result = [1, 1, 2, 6]
        prefix *= num

    postfix = 1
    for i in range(len(nums) - 1, -1, -1):  # (stop, start, step)
        result[i] *= postfix  # result = [24, 12, 8, 6]
        postfix *= nums[i]

    return result


output = productExceptSelf(nums)
print(output)


# Time Complexity -> O(n)
# Space Complexity -> O(1)