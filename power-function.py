def pow(x, n):
    if n < 0:   # x^-n
        return 1/pow(x, -n)
    
    if n == 0:  # x^0
        return 1
    
    if n == 1:  # x^1
        return x

    if n % 2 == 1:  # x^n(odd)
        return x * pow(x, n-1)

    else:     # x^n(even)
        m = pow(x, n/2)
        return m * m


result = pow(2, 128)
print(result)

# time complexity -> O(logn)
# space complexity -> O(1)

