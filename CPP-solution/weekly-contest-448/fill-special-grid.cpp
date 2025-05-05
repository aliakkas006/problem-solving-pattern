/* 
*** Algorithm:

    1. Start from full grid of size `2^N × 2^N`.                                 
    2. Use recursive function `fill()` to fill quadrants.                        
    3. Each quadrant gets a base offset ensuring unique values.                  
    4. Order of quadrant fill: Top-Right → Bottom-Right → Bottom-Left → Top-Left 
    5. Base case: size 1 cell → assign and return.                               
    6. Done when all cells are filled.                                           

*/

/* 
🔢 Complexity Analysis:
    * Time Complexity: O(4^N) = O(n^2) since size = 2^N and the total number of cells is size^2 = 4^N
    * Space Complexity: O(4^N) for the grid.
*/

class Solution {
    public:
        vector<vector<int>> specialGrid(int N) {
            int size = 1 << N; // 2^N
            vector<vector<int>> grid(size, vector<int>(size));
            fill(grid, 0, 0, size, 0);
            return grid;
        }
    
    private:
        void fill(vector<vector<int>>& grid, int x, int y, int size, int base) {
            if (size == 1) {
                grid[x][y] = base;
                return;
            }
    
            int half = size / 2;
            int area = half * half;
    
            // Fill 4 quadrants in-place with correct offset base values
            fill(grid, x, y + half, half, base);               // Top-right
            fill(grid, x + half, y + half, half, base + area); // Bottom-right
            fill(grid, x + half, y, half, base + 2 * area);    // Bottom-left
            fill(grid, x, y, half, base + 3 * area);           // Top-left
        }
    };
    