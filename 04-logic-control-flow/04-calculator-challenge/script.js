const calculator = (num1, num2, op) => {
  switch (op) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log((num1 / num2).toFixed(1));
      break;
    default:
      console.log(`${op} is an Invalid Operator!`);
  }
};

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');
