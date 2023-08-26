def nearestValidPoint(x, y, points):
    min_distance = float('inf')
    nearest_index = -1

    for i, point in enumerate(points):
        if point[0] == x or point[1] == y:
            distance = abs(x - point[0]) + abs(y - point[1])
            if distance < min_distance:
                min_distance = distance
                nearest_index = i
        
    return nearest_index


print(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]]))