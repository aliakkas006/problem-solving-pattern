str_1 = 'anagram'
str_2 = 'nagaram'

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # solution->1: using sorted function
        # return sorted(s) == sorted(t)

        # solution->2: using hashmap
        if(len(s) != len(t)):
            return False
        
        count_S, count_T = {}, {}

        for i in range(len(s)):
            count_S[s[i]] = 1 + count_S.get(s[i], 0)    
            count_T[t[i]] = 1 + count_T.get(t[i], 0)

        return count_S == count_T

instance = Solution()
result = instance.isAnagram(str_1, str_2)

print(result)