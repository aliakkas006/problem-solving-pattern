/* 
🔄 Approach:
    * Input: A string s consisting of digits (e.g., "12345").
    * While loop: Repeatedly process the string by:
        - Taking every pair of adjacent digits.
        - Computing their sum mod 10.
        - Constructing a new string next from those results.
    * Repeat the process until only 2 digits are left.
    * Return true if the final two digits are the same, otherwise return false.


*/

class Solution {
    public:
        bool hasSameDigits(string s) {
            while (s.length() > 2) {
                string next = "";
                for (size_t i = 0; i < s.length() - 1; ++i) {
                    int sum = (s[i] - '0' + s[i + 1] - '0') % 10;
                    next += to_string(sum);
                }
                s = next;
            }
            return s[0] == s[1];
        }
    };