// Condicionais

const sum = 1 + 1;

// == Verifica apenas o valor
// === Verifica o valor e o tipo

if (sum == 2) {
  console.log("Sum is 2!");
} else if (sum === 3) {
  console.log("Sum is 3!");
} else {
  console.log("Sum is not 2!");
}

// & and
// || or

const sum1 = 2 + 2;
const sum2 = 3 + 4;

if ((sum1 === 4) & (sum2 === 6)) {
  console.log("Sum1 is 4 and sum2 is 6!");
}

if (sum1 === 4 || sum2 === 6) {
  console.log("Sum1 is not 2!");
}

// Ternary condition
let number = sum === 2 ? 2 : 4;

// Mesma coisa que acima
if (sum === 2) {
  number = 2;
} else {
  number = 4;
}

console.log(number);

// Swicth Case

const car = "Trem";

switch (car) {
  case "Mercedes":
    console.log("Mercedes is beautiful!");
    break;
  case "Ferrari":
    console.log("Ferrari is very red!");
    break;
  case "Tesla":
    console.log("Tesla is tecnologic!");
    break;
  default:
    console.log("Car not foud!");
}
