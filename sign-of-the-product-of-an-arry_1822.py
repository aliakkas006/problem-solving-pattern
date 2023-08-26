def arraySign(nums):
    if 0 in nums:
        return 0
    
    sign = 1
    
    for num in nums:
        if num < 0:
            sign = -sign
    
    return sign


print(arraySign([1,5,0,2,-3]))
