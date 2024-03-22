export function convertInfixToPrefix(expression) {
    // Algoritmo para convertir infija a prefija
    const operators = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const precedence = (operator) => {
        return operators[operator] || 0;
    };

    const isOperator = (char) => {
        return ['+', '-', '*', '/', '^'].includes(char);
    };

    const isOperand = (char) => {
        return /^[a-zA-Z0-9]$/.test(char);
    };

    const stack = [];
    const output = [];

    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (isOperand(char)) {
            output.push(char);
        } else if (isOperator(char)) {
            while (stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence[char]) {
                output.push(stack.pop());
            }
            stack.push(char);
        } else if (char === ')') {
            stack.push(char);
        } else if (char === '(') {
            while (stack[stack.length - 1] !== ')') {
                output.push(stack.pop());
            }
            stack.pop();
        }
    }

    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output.reverse().join('');
}

export function convertPrefixToInfix(expression) {
    // Algoritmo para convertir prefija a infija
    const stack = [];

    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            stack.push(`(${operand1}${char}${operand2})`);
        }
    }

    return stack.pop();
}
