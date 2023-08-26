def isHappy(n: int) -> bool:
    slow = fast = n

    while True:
        slow = sum(int(digit) ** 2 for digit in str(slow))
        fast = sum(int(digit) ** 2 for digit in str(fast))
        fast = sum(int(digit) ** 2 for digit in str(fast))

        if slow == fast:
            break
    
    return slow == 1


print(isHappy(19))