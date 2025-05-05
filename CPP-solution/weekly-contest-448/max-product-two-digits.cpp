/* Problem:
 * You are given a positive integer n.
 * Return the maximum product of any two digits in n
*/

/**
    * Approach:
    * 1. Extract the digits from the number n.
    * 2. Sort the digits in descending order.
    * 3. The maximum product will be the product of the two largest digits.
    * 4. Return the product
 */

 /* 
    * Complexity Analysis:
    * - Time Complexity: O(d log d), where d is the number of digits in n.
    * - Space Complexity: O(d), for storing the digits.
 */

class Solution {
    public:
        int maxProduct(int n) {
            // Step 1: Extract digits from n
            vector<int> digits;
            
            while (n > 0) {
                digits.push_back(n % 10);
                n /= 10;
            }
    
            // Step 2: Find the two largest digits
            sort(digits.begin(), digits.end(), greater<int>());
    
            // Step 3: Compute the product of the two largest digits
            return digits[0] * digits[1];
        }
    };
    