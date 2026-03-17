function calculateExpression(expression) {

  const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g);

  if (!tokens) return alert("please enter a number") || 0;

  let stack = [];
  let currentNumber = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {

    const operator = tokens[i];
    const nextNumber = Number(tokens[i + 1]);

    if (operator === "*") {
      currentNumber = currentNumber * nextNumber;
    }
    else if (operator === "/") {
      currentNumber = currentNumber / nextNumber;
    }
    else {
      stack.push(currentNumber);
      stack.push(operator);
      currentNumber = nextNumber;
    }
  }

  stack.push(currentNumber);

  let result = stack[0];

  for (let i = 1; i < stack.length; i += 2) {
    const operator = stack[i];
    const num = stack[i + 1];

    if (operator === "+") result += num;
    if (operator === "-") result -= num;
  }

  return result;
}

export default calculateExpression;