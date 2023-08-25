// Programação Orientadas a Objeto (POO)

class Animal {
  // Função Constructor
  constructor(name) {
    this.name = name;
  }
  // Metodo do objeto
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}
// instanciar a classe or chamar a classe
const animal = new Animal("Simba");
animal.speak(); // Simba made some noise!

// Extender a Classe de Objeto

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barked!`);
  }
}
const dog = new dog("Bob");
dog.speak(); // Bob barked!
