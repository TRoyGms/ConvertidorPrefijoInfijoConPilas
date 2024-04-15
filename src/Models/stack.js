import { Node } from './model.js';

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.isEmpty()) {
            let popped = this.top;
            this.top = this.top.next;
            return popped;
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.top === null;
    }
}

export { Stack };