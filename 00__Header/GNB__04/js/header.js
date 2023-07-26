// 메뉴 요소
const wrapEl = document.querySelector("#wrap");
const menuBtnEl = document.querySelector("#header .menu");
const navEl = document.querySelector("#nav");
const emptyEl = navEl.querySelector(".empty");
const closeBtnEl = navEl.querySelector(".close");

menuBtnEl.addEventListener("click", () => {
  navEl.classList.add("active");
  wrapEl.classList.add("disabled");
});

emptyEl.addEventListener("click", () => {
  navEl.classList.remove("active");
  wrapEl.classList.remove("disabled");
});

closeBtnEl.addEventListener("click", () => {
  navEl.classList.remove("active");
  wrapEl.classList.remove("disabled");
});
