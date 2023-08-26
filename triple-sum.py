a = [3, 5, 7]
b = [3, 6]
c = [4, 6, 9]

class Solution:
    def triplets(self, a, b, c):
        a = sorted(set(a))
        b = sorted(set(b))
        c = sorted(set(c))

        count = i = j = 0

        for q in b:
            while i < len(a) and a[i] <= q:     # p <= q
                i += 1

            while j < len(c) and c[j] <= q:     # q >= r
                j += 1

            count += i * j

        return count


print(Solution().triplets(a, b, c))


# another solution:
# from bisect import bisect_right

# i = bisect_right(a, q)
# j = bisect_right(c, q)




