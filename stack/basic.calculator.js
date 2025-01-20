/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
    // Remove all spaces
    s = s.replace(/\s/g, '');

    let stack = [];
    let num = 0;
    let sign = 1;   // 1 for positive, -1 for negative
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if(!isNaN(char)) {
            num = num * 10 + Number(char);
        } else if (char === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (char === '(') {
            // Save current result and sign to stack
            stack.push(result);
            stack.push(sign);

            // Reset result and sign for the inner parentheses calculation
            result = 0;
            sign = 1;
        } else if (char === ')') {
            // Add final number within current parenthesis
            result += sign * num;
            num = 0;

            result *= stack.pop(); // Pop the sign
            result += stack.pop(); // Pop the result
        }
    }

    // Add final number if exists
    if (num !== 0) {
        result += sign * num;
    }

    return result;

};

// Example usage
console.log(calculate("1 + 1")); // 2
console.log(calculate(" 2-1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23