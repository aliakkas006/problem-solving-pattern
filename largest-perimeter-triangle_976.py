def largestPerimeter(arr):
    arr.sort()

    for i in range(len(arr)-3, -1, -1):
        if arr[i] + arr[i+1] > arr[i+2]:
            return arr[i] + arr[i+1] + arr[i+2]
    
    return 0


print(largestPerimeter([2, 1, 2]))


# Time Complexity -> O(n)
# Space Complexity -> O(1)