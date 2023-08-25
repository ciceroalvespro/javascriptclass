// Function & Arrow Function

function sum(a, b) {
  console.log(a + b);
}
sum(2, 2);

// or

function sum(a, b) {
  return a + b;
}
const sumValue = sum(2);

console.log(sumValue);

// Arrow Function

const sumArrow = (a, b = 10) => a + b;
