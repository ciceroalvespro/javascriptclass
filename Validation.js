// Validation
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");
const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Please fill out all the fields!";
    // atribui uma classe do CSS
    errorMessage.classList = "error";
    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
    return;
  }
  // Criar um elemento
  const li = document.createElement("li");
  // Dar uma classe ao elemento
  li.classList = "item";
  // Atribuir um valor ao elemento
  li.innerHTML = `Nome: ${nameValue}<br/>Email: ${emailValue}`;
  // Colocar o elemento dentro de uma Div
  items.appendChild(li);
  // Limpar os Campos
  nameInput.value = "";
  emailInput.value = "";
});
