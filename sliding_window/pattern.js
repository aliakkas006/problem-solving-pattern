function slidingWindow(arr) {
    let windowStart = 0;
    let windowSum = 0;  
    let result = 0;     

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // Add the next element to window
        windowSum += arr[windowEnd];

        // Condition to shrink window (example: maintaining window size k)
        while (/* condition here */) {
            // Remove element from window start
            windowSum -= arr[windowStart];
            windowStart++;
        }

        // Update result if needed
        result = Math.max(result, windowSum);
    }
    return result;
}
