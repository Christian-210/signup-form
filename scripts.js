const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#confirmPassword");
const validationMsg = document.querySelector(".validation-msg");

passwordInput.addEventListener("input", (e) => {
  console.log(e.target.value);

  if (passwordConfirmInput.value !== "") {
    if (e.target.value !== passwordInput.value) {
      passwordConfirmInput.classList.add("error");
      passwordConfirmInput.classList.remove("success");

      validationMsg.textContent = "Passwords do not match!";
      validationMsg.style.color = "red";
    } else {
      passwordConfirmInput.classList.add("success");
      passwordConfirmInput.classList.remove("error");

      validationMsg.textContent = "Passwords match!";
      validationMsg.style.color = "#00ae00";
    }
  }

  if (
    e.target.value !== passwordConfirmInput &&
    passwordConfirmInput.value !== ""
  ) {
    if (e.target.value !== passwordConfirmInput.value) {
      passwordConfirmInput.classList.add("error");
      passwordConfirmInput.classList.remove("success");

      validationMsg.textContent = "Passwords do not match!";
      validationMsg.style.color = "red";
    } else {
      passwordConfirmInput.classList.add("success");
      passwordConfirmInput.classList.remove("error");

      validationMsg.textContent = "Passwords match!";
      validationMsg.style.color = "#00ae00";
    }
  }
});

passwordConfirmInput.addEventListener("input", (e) => {
  console.log(e.target.value);

  validationMsg.classList.add("show");

  if (e.target.value !== passwordInput.value) {
    passwordConfirmInput.classList.add("error");
    passwordConfirmInput.classList.remove("success");

    validationMsg.textContent = "Passwords do not match!";
    validationMsg.style.color = "red";
  } else {
    passwordConfirmInput.classList.add("success");
    passwordConfirmInput.classList.remove("error");

    validationMsg.textContent = "Passwords match!";
    validationMsg.style.color = "#00ae00";
  }
});
