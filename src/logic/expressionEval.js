export function calculateExpression(expression) {
    const tokens = expression.match(/(?:\d+\.\d+|\d+|[-+*/^()])/g);
    const precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3};
    const operatorStack = [];
    const valueStack = [];

    console.log(tokens);
    
    function applyOperator(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            case '^':
                return Math.pow(a, b);
            default:
                return 0;
        }
    }
    
    for (const token of tokens) {
        if (!isNaN(token)) {
            valueStack.push(parseFloat(token));
        } else if (token in precedence) {
            while (operatorStack.length > 0 && 
                   precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]) {
                const operator = operatorStack.pop();
                const value2 = valueStack.pop();
                const value1 = valueStack.pop();
                const result = applyOperator(value1, value2, operator);
                valueStack.push(result);
            }
            operatorStack.push(token);
        } else if (token === '(') {
            operatorStack.push(token);
        } else if (token === ')') {
            while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                const operator = operatorStack.pop();
                const value2 = valueStack.pop();
                const value1 = valueStack.pop();
                const result = applyOperator(value1, value2, operator);
                valueStack.push(result);
            }
            operatorStack.pop(); // Remove the '('
        }
    }
    
    while (operatorStack.length > 0) {
        const operator = operatorStack.pop();
        const value2 = valueStack.pop();
        const value1 = valueStack.pop();
        const result = applyOperator(value1, value2, operator);
        valueStack.push(result);
    }
    
    return valueStack[0];
}

// const expression = prompt("Enter an arithmetic expression: ");
// const result = calculateExpression(expression);
// console.log("Result:", result);
