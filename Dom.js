// Selecionar elementos do DOM - Dom é o site html

// const addUserText = document.getElementById("add-user");
// const myForm = documento.querySelector(".item");

// Selecionar multiplos elementos
// const allItem = document.querySelectorAll(".item"); // NodeList 3 esse é o melhor!
// const allItem = document.getElementsByClassName("Item");
// const allItem = document.getElementsByTagName("id");

// Manipulando elementos do DOM

const items = document.querySelector(".items");
// items.remove();

// items.firstElementChild.remove();
// items.lastElementChild.remove();

// items.children[0].innerHTML = "Item alterado";
// items.firstElementChild.innerHTML = "<h1>Item 1 Alterado</h1>";

// items.children[0].textContent = "Item Alterado";

const button = document.querySelector(".btn");
button.style.background = "red";
button.style.color = "Blue";
