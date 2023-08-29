prices = [7, 1, 5, 3, 6, 4]

def maxProfit(prices):
    left, right = 0, 1
    max_rofit = 0

    while right < len(prices):
        if prices[left] < prices[right]:
            curr_rofit = prices[right] - prices[left]
            max_rofit = max(curr_rofit, max_rofit)
        else:
            left = right
        
        right += 1
    
    return max_rofit

print(maxProfit(prices))


# Time Complexity -> O(n)
# Space Complexity -> O(1)