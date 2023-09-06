const hpEl = Array.from(document.querySelectorAll(".header__title"))[1];
const hpText = hpEl.innerHTML.trim();
const fisEl = document.querySelector(".feature__introduce__sales");
const fisText = fisEl.innerHTML.trim();
function wordWrap() {
  if (window.innerWidth <= 920) {
    fisEl.innerHTML = fisText.replace("、", "、<br>");
    if (window.innerWidth <= 767) {
      hpEl.innerHTML = hpText.replace("!", "!<br>");
    }
  } else {
    fisEl.innerHTML = fisText;
    hpEl.innerHTML = hpText;
  }
}
wordWrap();
window.addEventListener("resize", wordWrap);
