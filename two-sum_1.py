nums = [2, 1, 5, 3]
target = 4

def twoSum(nums, target):
    new_dict = {}   # val: index

    for i, n in enumerate(nums):
        diff = target - n
        if diff in new_dict:
            return [new_dict[diff], i]
        new_dict[n] = i
    
    return

print(twoSum(nums, target))


# Time complexity: O(n)
# Space complexity: O(n)