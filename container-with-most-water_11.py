height = [1,8,6,2,5,4,8,3,7]

def maxArea(height):
    max_area = 0
    left, right = 0, len(height) - 1

    while left < right:
        current_area = (right - left) * min(height[left], height[right])
        max_area = max(max_area, current_area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area


print('Maximum Area =', maxArea(height))