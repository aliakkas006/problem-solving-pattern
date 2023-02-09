nums = [-1, -2, -3]


def maxProduct(nums):
    result = max(nums)      # result = -1
    cur_min, cur_max = 1, 1

    for num in nums:
        temp = num * cur_max

        cur_max = max(num * cur_max, num * cur_min, num)
        cur_min = min(temp, num * cur_min, num)

        result = max(result, cur_max)

    return result


output = maxProduct(nums)
print(output)


# Time Complexity -> O(n)
# Space Complexity -> O(1)