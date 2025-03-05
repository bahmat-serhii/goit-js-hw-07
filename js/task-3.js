const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("keyup", () => {
  nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});
const classText = document.querySelector("h1");
classText.classList.add("title");
nameInput.classList.add("text-input");
