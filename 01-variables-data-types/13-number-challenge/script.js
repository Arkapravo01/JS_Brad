const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const factory = (a, b, op) => {
  let res;

  switch (op) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    case '/':
      res = Math.round(a / b);
      break;
    case '%':
      res = a + b;
      break;
  }
  return `${a} ${op} ${b} = ${res}`;
};

const addOutput = factory(x, y, '+');
const subOutput = factory(x, y, '-');
const mulOutput = factory(x, y, '*');
const quotientOutput = factory(x, y, '/');
const modOutput = factory(x, y, '%');

console.log(addOutput);
console.log(subOutput);
console.log(mulOutput);
console.log(quotientOutput);
console.log(modOutput);
