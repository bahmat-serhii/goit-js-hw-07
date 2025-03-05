const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.querySelector(".login-form input[name='email']");
  const passwordInput = document.querySelector(
    ".login-form input[name='password']"
  );

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  console.log({ email: emailValue, password: passwordValue });

  loginForm.reset();
});
const classBtn = document.querySelector("button");
classBtn.classList.add("form-btn");
const classLabel = document.querySelectorAll("label");
classLabel.forEach((item) => item.classList.add("form-label"));
const classInput = document.querySelectorAll("input");
classInput.forEach((item) => item.classList.add("form-input"));
