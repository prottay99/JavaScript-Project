const inputForm = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re-password");
const message = document.querySelector("#msg");

const checkEmail = (email) => {
  if (email.includes("@" && ".")) {
    message.textContent = `@ and . is present`;
  } else {
    message.textContent = `@ is not present`;
  }
};

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail(email.value);
  console.log(password.value);
  console.log(rePassword.value);
});
