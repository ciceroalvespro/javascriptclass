// Conceito de Truthy & Falsy

const x = "";
// FALSE

const y = 0;
// FALSE

const a = null;
const b = undefined;
// FALSE

const list = [];
const object = {};
// TRUE

console.log(!!object);

console.log(!list);
// FALSE ! inverte o boleano
