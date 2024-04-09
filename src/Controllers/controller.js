import { Stack } from '../Models/model.js';
import { displayPrefix } from '../Views/view.js';

function infixToPrefix(infix) {
    let operators = "+-*/";
    let precedence = {"+": 1, "-": 1, "*": 2, "/": 2};
    let stack = new Stack();
    let prefix = "";
    infix = infix.split("").reverse().join("");

    for (let i = 0; i < infix.length; i++) {
        let token = infix[i];
        if (operators.includes(token)) {
            while (!stack.isEmpty() && precedence[stack.top.data] >= precedence[token]) {
                prefix += stack.pop().data;
            }
            stack.push(token);
        } else if (token === ')') {
            stack.push(token);
        } else if (token === '(') {
            while (stack.top.data !== ')') {
                prefix += stack.pop().data;
            }
            stack.pop(); // Pop '('
        } else {
            prefix += token;
        }
    }

    while (!stack.isEmpty()) {
        prefix += stack.pop().data;
    }

    return prefix.split("").reverse().join("");
}

function convert() {
    let infixExpression = document.getElementById("inputExpression").value.trim();
    let prefixExpression = infixToPrefix(infixExpression);
    displayPrefix(prefixExpression);
}

export { infixToPrefix, convert };
