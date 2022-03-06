class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // create list:
    createList_1(data) {
        const node = new Node(data);
        let current;

        if (this.head === null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        console.log(current);
    }

    
}

const list1 = new LinkedList();
list1.createList(1);
list1.createList(2);
list1.createList(4);