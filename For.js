for (let index = 0;index <=20;index ++){
    //console.log(index);
}

const cars = ['Ferrari', 'Volvo', 'Mercedez', 'Jaguar'];

for (let i = 0; i < cars.length;i++){
    // console.log(cars[i]);
}

for (let car of cars){
    // console.log(car);
}

cars.forEach(function(car,index){
    // console.log(car);
    // console.log(index);
});

//While Loop

let index = 2;

while (index < 10){
    console.log('Index é menor que 10! O valor do index é');
    // index = index +1;
    // index += 1
    index ++
};

const person = {
    name:'Jane',
    age:21,
}
for(property in person){
    console.log(person[property]);
}
