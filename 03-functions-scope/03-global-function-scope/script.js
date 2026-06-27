const x = 100;

console.log(x, 'in global');

// function run() {
//   console.log(window.innerHeight);
// }
// run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();
