const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<img src = "checked.png" id="checked">`;
  return true;
}

function validateEmail() {
  const email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.innerHTML = "Enter valid email";
    return false;
  }
  emailError.innerHTML = `<img src = "checked.png" id="checked">`;
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length != 11) {
    phoneError.innerHTML = "Phone no should be 11 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  phoneError.innerHTML = `<img src = "checked.png" id="checked">`;
  return true;
}
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + "more characters required";
    return false;
  }
  messageError.innerHTML = `<img src = "checked.png" id="checked">`;
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Something went wrong! Please fixed the error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
