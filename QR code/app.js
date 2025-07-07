const qrImage = document.querySelector("#qrImage");
const imageBox = document.querySelector("#image-box");
const qrText = document.querySelector("#qrText");

function generateQrCode() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imageBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 500);
  }
}
