// Objetos


const person = {
    firtName: 'Cicero',
    lastName: 'Alves',
    age: '39',
    hobbies: ['Assistir', 'Tocar Guitarra', 'Ler'],
    dog: {
        name:'Chelsea',
    age: 1,
    }
};

// const firstName = person.firtName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Metodo destroction
const {firtName: primeiroNome, lastName, age, hobbies,dog} = person

const ler = person.hobbies[2];

// console.log(primeiroNome);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);
// console.log(ler);

// adicionando outra propriedade

// person.dog = "Chelsea"
// console.log(person.dog)

const todos = [
    {
        id: 1,
        description:'Estudar programaçaão',
        isComplited: false,
    },
    {
        id:2,
        description:'ELer',
        isComplited: true,
    },
    {
        id:3,
        description:'Treinar',
        isComplited: true,
    },
];
const description = todos[2].description;

// console.log(description);
const Tarefas = [
    {
        id:1,
        description:'Comprar Carne',
        isComplited: false
    },
    {
        id:2,
        description:'Ler um livro',
        isComplited: true
    },
    {
        id:3,
        description:'Ir trabalhar as 14:00',
        isComplited: false
    },
];

const consulta = Tarefas[2].description;
const consulta2 = Tarefas[2].isComplited;
console.log(`Programação de hoje:${consulta} Status:${consulta2}`);


