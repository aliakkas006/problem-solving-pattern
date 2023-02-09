nums = [4, 5, 6, 7, 0, 1, 2]
target = 0


def search(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        # ultimate targeted index
        if nums[mid] == target:
            return mid

        # search in the left sorted portion
        if nums[mid] >= nums[left]:
            if nums[mid] < target or nums[left] > target:
                left = mid + 1
            else:
                right = mid - 1

        # search in the right sorted portion (just alternate logic of the left sorted portion)
        else:
            if nums[mid] > target or nums[right] < target:
                right = mid - 1
            else:
                left = mid + 1

    return -1


output = search(nums, target)
print(output)


# Time Complexity -> O(log n)
# Space Complexity -> O(1)
