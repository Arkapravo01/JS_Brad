const d = new Date(2022, 1, 10, 18, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  case 4:
    console.log('It is April');
    break;
  default:
    console.log('It is not Jan, Feb, March or April');
}

switch (true) {
  case hour < 12:
    console.log('Good Morning!');
    break;
  case hour < 18:
    console.log('Good Afternoon!');
    break;
  default:
    console.log('Good Night');
}
