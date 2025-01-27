class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Stack to keep track of minimums
  }

  push(val) {
    // Push the value onto the main stack
    this.stack.push(val);

    // If minStack is empty, or current value is less than or equal to the top of minStack, push it onto minStack
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    )
      this.minStack.push(val);
  }

  pop() {
    // If the popped value is the same as the top of minStack, pop minStack as well
    if (this.stack.pop() === this.minStack[this.minStack.length - 1])
      this.minStack.pop();
  }

  top() {
    // Return the top element of the main stack
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // Return the top element of the minStack, which is the minimum element
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3

minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
