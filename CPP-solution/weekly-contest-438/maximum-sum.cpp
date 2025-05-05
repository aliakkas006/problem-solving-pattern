/* 
💡Approach: Greedy + Max Heap
Step 1: Per-row Greedy Selection
        - For each row, sort its elements in descending order.
        - Pick only the top limits[i] elements (best from that row).
        - This respects the row-level limit.

Step 2: Global Optimization
        - Put all picked elements (from all rows) into a max heap (priority queue).
        - From this heap, extract the top k largest elements.
        - This ensures that globally, the sum is maximized with exactly k picks.

Step 3: Return the sum
        - As you extract from the heap, sum the values.
        - This final value is the maximum possible sum under the constraints.
*/

class Solution {
    public:
        long long maxSum(vector<vector<int>>& grid, vector<int>& limits, int k) {
            priority_queue<int> maxHeap;
            int n = grid.size();
    
            for (int i = 0; i < n; ++i) {
                sort(grid[i].rbegin(), grid[i].rend());
                for (int j = 0; j < min((int)grid[i].size(), limits[i]); ++j) {
                    maxHeap.push(grid[i][j]);
                }
            }
    
            long long maxSum = 0;
            while (k-- > 0 && !maxHeap.empty()) {
                maxSum += maxHeap.top();
                maxHeap.pop();
            }
    
            return maxSum;
        }
    };