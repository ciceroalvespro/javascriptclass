const cars = ['Ferrari', 'Volvo', 'Mercedez', 'Jaguar'];
const toJson = JSON.stringify(cars);
console.log(toJson);

const toArray = JSON.parse(toJson);
console.log(toArray);
