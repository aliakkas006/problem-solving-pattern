/**
 * @param {string[]} tokens
 * @return {number}
 */

const evalRPN = (tokens) => {
    const stack = [];

    // Define operations using an object
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b) // Truncate towards zero
    };

    for (const token of tokens) {
        if (token in operations) {
            // Pop the two operands (in reverse order)
            const num2 = stack.pop();
            const num1 = stack.pop();

            // Perform the operation and push the result back to stack
            stack.push(operations[token](num1, num2));
        } else {
            // Push the number to the stack
            stack.push(Number(token));
        }
    }

    return stack[0];
};

// Example usage
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
