def countOdds(low, high):
    return (high - low + 1) // 2 + (low & high & 1)
    # if low % 2 == 0:    # if low is even make it odd
    #     low += 1

    # if low == high:
    #     if low % 2 != 0:
    #         return 1

    # return (high - low) // 2 + 1 if low < high else 0


print(countOdds(3, 7))
