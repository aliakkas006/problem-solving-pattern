function minWindow(s, t) {
  const map = Array(128).fill(0);

  // Populate the map with the characters and their frequencies in string t
  for (const char of t) map[char.charCodeAt(0)]++;

  let counter = t.length,
    begin = 0,
    end = 0,
    d = Infinity,
    head = 0;

  // Iterate through the string s with the end pointer
  while (end < s.length) {
    if (map[s.charCodeAt(end++)]-- > 0) counter--; // Character in t

    // Try to minimize the window by moving the begin pointer
    while (counter === 0) {
      // Update the minimum window if a smaller window is found
      if (end - begin < d) d = end - (head = begin);

      if (map[s.charCodeAt(begin++)]++ === 0) counter++; // Make it invalid
    }
  }

  // Return the minimum window substring or an empty string if not found
  return d === Infinity ? '' : s.substring(head, head + d);
}

const s = 'ADOBECODEBANC';
const t = 'ABC';
console.log(minWindow(s, t)); // Output: "BANC"
