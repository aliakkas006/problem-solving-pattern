arr = [1, 1, 1, 2, 3, 4, 4, 5]


def remove_duplicates(arr):
    n = len(arr)

    if n == 0:
        return [], 0

    j = 1

    for i in range(1, n):
        if arr[i] != arr[i - 1]:
            arr[j] = arr[i]
            j += 1
    
    return arr[:j], j


print(remove_duplicates(arr))