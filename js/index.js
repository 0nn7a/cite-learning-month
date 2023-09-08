const hpEl = Array.from(document.querySelectorAll(".header__title"))[1];
const hpText = hpEl.innerHTML.trim();
const fisEl = document.querySelector(".feature__introduce__sales");
const fisText = fisEl.innerHTML.trim();
const carouselEl = document.querySelector(".carousel-title-h3");
const carouselText = carouselEl.innerHTML.trim();
function wordWrap() {
  if (window.innerWidth <= 920) {
    fisEl.innerHTML = fisText.replace("、", "、<br>");
    carouselEl.innerHTML = carouselText.replace("，", "，<br>");
    if (window.innerWidth <= 767) {
      hpEl.innerHTML = hpText.replace("!", "!<br>");
    }
  } else {
    fisEl.innerHTML = fisText;
    hpEl.innerHTML = hpText;
    carouselEl.innerHTML = carouselText;
  }
}
wordWrap();
window.addEventListener("resize", wordWrap);
