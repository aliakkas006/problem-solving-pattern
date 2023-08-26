from typing import List
import collections

arr = ['eat', 'tea', 'tan', 'nat', 'ate', 'bat']

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dict = {}

        for str in strs:
            sorted_str = "".join(sorted(str))

            if sorted_str not in dict:
                dict[sorted_str] = [str]
            else:
                dict[sorted_str].append(str)
        
        return dict.values()


        # ans = collections.defaultdict(list)
        # for s in strs:
        #     count = [0] * 26
        #     for c in s:
        #         count[ord(c) - ord('a')] += 1
        #     ans[tuple(count)].append(s)
        # return ans.values() 


instance = Solution()
list_group_anagrams = instance.groupAnagrams(arr)
print(list_group_anagrams)