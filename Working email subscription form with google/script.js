const scriptURL =
  "https://script.google.com/macros/s/AKfycbxIl3uHp6qaEIHUHbcAtmzsCiR7Z_T1L3zqrGxoV1Dw9ojQRiVclsvvKHoTnKKTjiHb/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for subscribe!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "Somthing Went Wrong";
      msg.style.color = "red";
    });
});
