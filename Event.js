// Events
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitBotton = document.querySelector("#submit-button");
const items = document.querySelector(".items");
const myForm = document.querySelector("#my-form");
const body = document.querySelector("body");
items.children[2].remove();

submitBotton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    items.children[0].style.background = "red";
    items.children[0].style.color = "white";
    return (items.children[0].textContent = "Please fill out all the filds!");
  }
  items.children[0].textContent = nameValue;
  items.children[1].textContent = emailValue;
  myForm.style.background = "green";
  body.style.background = "white";
});
