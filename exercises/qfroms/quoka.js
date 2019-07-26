// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {}

const q = new Queue();
console.log(q.add(1));
console.log(q.add(2));
console.log(q.add(3));
console.log(q.peek()); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2

console.log(q);
