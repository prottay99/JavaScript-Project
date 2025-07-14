const password = document.querySelector("#password");
const msg = document.querySelector("#message");
const sts = document.querySelector("#status");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (password.value.length < 4) {
    sts.innerHTML = "week";
    msg.style.color = "red";
    sts.style.color = "red";
  } else if (password.value.length >= 4 && password.value.length <= 8) {
    sts.innerHTML = "medium";
    msg.style.color = "yellow";
    sts.style.color = "yellow";
  } else if (password.value.length > 8) {
    sts.innerHTML = "Strong";
    msg.style.color = "green";
    sts.style.color = "green";
  }
});
