// Challenge 1
const toCelcius = (f) =>
  `The temperature is ${(((f - 32) * 5) / 9).toFixed(10)}\u00B0C`;

console.log(toCelcius(100));

const minMax = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { min, max };
};

// Challenge 2
const obj = minMax([1, 2, 3, 4, 5]);

console.log(`Max: ${obj.max} , Min: ${obj.min}`);

// Challenge 3
((length, breadth) => {
  console.log(
    `The area of a rectangle with length ${length} and ${breadth} is ${length * breadth}`,
  );
})(20, 10);
