const scrollSlider = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollSlider.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollSlider.scrollLeft += e.deltaY;
  scrollSlider.style.scrollBehavior = "auto";
});

backBtn.onclick = () => {
  scrollSlider.style.scrollBehavior = "smooth";
  scrollSlider.scrollLeft -= 900;
};
nextBtn.onclick = () => {
  scrollSlider.style.scrollBehavior = "smooth";
  scrollSlider.scrollLeft += 900;
};
