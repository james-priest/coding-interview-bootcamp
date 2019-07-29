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

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(idx - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(idx - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
