def subtractProductAndSum(n):
    prod_digits = 1
    sum_digits = 0

    while n > 0:
        rem = n % 10

        prod_digits *= rem
        sum_digits += rem

        n = n // 10
    
    return prod_digits - sum_digits


print(subtractProductAndSum(234))