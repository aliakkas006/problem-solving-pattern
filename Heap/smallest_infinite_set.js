class SmallestInfiniteSet {
  constructor() {
    this.minHeap = new MinPriorityQueue(); // Stores manually added numbers
    this.addedSet = new Set(); // Tracks numbers in the heap
    this.nextSmallest = 1; // Keeps track of the next natural number
  }

  popSmallest() {
    if (this.minHeap.size() > 0) {
      const smallest = this.minHeap.dequeue().element;
      this.addedSet.delete(smallest);
      return smallest;
    }
    return this.nextSmallest++;
  }

  addBack(num) {
    if (num < this.nextSmallest && !this.addedSet.has(num)) {
      this.minHeap.enqueue(num);
      this.addedSet.add(num);
    }
  }
}
