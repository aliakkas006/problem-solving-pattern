def canMakeArithmeticProgression(arr):
    arr.sort()
    diff = arr[1] - arr[0]

    for i in range(2, len(arr)):
        if arr[i] - arr[i-1] != diff:
            return False
    
    return True

print(canMakeArithmeticProgression([9, 3, 5, 1, 7]))


# Time Complexity -> O(nlogn)
# Space Complexity -> O(1)