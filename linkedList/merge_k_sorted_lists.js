/* 
    Step-by-Step solution:

    1. Create a Min-Heap to always get the smallest available node
    2. Insert the first node of each list into the heap
    3. While heap is not empty:
        - Extract the smallest node (heap root)
        - Add it to our result list
        - If that node has a next node, add it to the heap
    4. Return the merged list (after dummy head)
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  pop() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val <= this.heap[index].val) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild].val < this.heap[smallest].val
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild].val < this.heap[smallest].val
      ) {
        smallest = rightChild;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();
  const dummy = new ListNode(0);
  let current = dummy;

  // Add all initial nodes to heap
  for (const list of lists) {
    if (list) minHeap.push(list);
  }

  // Process nodes from heap
  while (!minHeap.isEmpty()) {
    const node = minHeap.pop();
    current.next = node;
    current = current.next;

    if (node.next) {
      minHeap.push(node.next);
    }
  }

  return dummy.next;
}
