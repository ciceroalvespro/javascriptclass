// Listas

const names = ['Cicero', 'Eduardo', 'Josi', 10, false ];
console.log(names[1])
const cicero = names[1];
names.push('Pedro');
console.log(names); // ['Cicero', 'Eduardo', 'Josi', 10, false, 'Pedro']
names.unshift(20);
console.log(names);
names.pop();
console.log(names)
names.pop();
names.pop();

names[3] = "Amor"; // [20, 'Cicero', 'Eduardo', 'Amor']


console.log(names)

console.log(names.indexOf("Amor"));// 3

const sortedNames = names.sort();
console.log(sortedNames);
console.log(names.length); // 4

const nameIsArray = Array.isArray(names);
console.log(nameIsArray); // True

// MAP FILTER E REDUZ

// const number = [1, 2, 3, 4, 5];
// const numerIsArray = Array.isArray(number);
// console.log(numerIsArray);// true

const number = [1, 2, 3, 4, 5];
// Multiplicar tudo por 2 atraves do map
const numerMultipliedByTwo = number.map(function(number){
    return number * 2
})
// console.log(numerMultipliedByTwo) //  [2, 4, 6, 8, 10]

const numeros = [10, 20, 30, 40, 50];
const numerosMultiplicados = numeros.map(function(a){
return a * 2;
})
// console.log(numerosMultiplicados);

// Filter 
// Command D e apagar
const ages = [8, 13, 38, 27, 50, 30,7  ];
const evenAges = ages.filter(function(ages){
return ages % 2 == 0
})
// console.log(evenAges);

// Reduce
// Reduzir tudo para um

const sumOfAges = ages.reduce(function(age,acumulator){
return acumulator + age;
},0);// Inicio do acumulator
// console.log(sumOfAges) // 173

//const map1 = array1.map((x) => x * 2);

const arra1 = [1, 2, 3, 4, 5];
const map1 = arra1.map((x)=>x * 2); // (x)=> isso é uma função
// console.log(map1)

const array2 = [2,3, 4, 5, 6];
const sumTotal = array2.reduce((total,x)=>total + x);
// console.log(sumTotal)

const filter = [3,4,2,7,10,13,19,20,]
const filtered = filter.filter((x)=>x % 2 == 0); // nao usa function e return
console.log(filtered);