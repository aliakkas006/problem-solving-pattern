nums = [1,2,3,1]

def containsDuplicate(nums):
    if len(nums) == 0:
        return False

    hash_set = set()

    for num in nums:
        if num in hash_set:
            return True

        hash_set.add(num)     # {1, 2, 3}
    
    return False


print(containsDuplicate(nums))


# Time Complexity -> O(n)
# Space Complexity -> O(n)