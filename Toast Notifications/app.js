const toastBox = document.getElementById("toastBox");
const successMessage = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
const errorMessage = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`;
const invalidMessage = `<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, check again`;

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);

  if (message.includes("error")) {
    toast.classList.add("error");
  }
  if (message.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
