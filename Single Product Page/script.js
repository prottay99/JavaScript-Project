const productImage = document.getElementById("product-img");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function () {
  productImage.src = "image/image1.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

btn[1].onclick = function () {
  productImage.src = "image/image2.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

btn[2].onclick = function () {
  productImage.src = "image/image3.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
