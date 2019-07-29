// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return null;
    }
    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
      return;
    }
    this.getLast().next = new Node(data);
  }
  getAt(idx) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(idx) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node = this.head;
    let previous = null;
    while (node) {
      if (idx === counter) {
        previous !== null
          ? (previous.next = node.next)
          : (this.head = node.next);
      }
      if (!node.next) {
        return;
      }
      counter++;
      previous = node;
      node = node.next;
    }
    return;
  }
}

// const list = new LinkedList();
// list.head = new Node(10);
// list.insertFirst(5);
// console.log('list', list);
// console.log('list.size()', list.size());
// console.log('list.getFirst()', list.getFirst());
// console.log('list.getLast()', list.getLast());

// const l = new LinkedList();
// console.log(l);
// l.insertLast('a');
// console.log(l);
// console.log(l.size()); // 1
// console.log(l.getLast().data); // a
// console.log(l);

// const list = new LinkedList();
// list.insertFirst('a');
// list.insertFirst('b');
// list.insertFirst('c');
// console.log(list);
// list.removeAt(1);
// list.getAt(1); // returns node with data 'a'
// console.log(list);

const l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
console.log(l.getAt(0).data);
l.removeAt(0);
console.log(l.getAt(0).data);
