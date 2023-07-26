// 메뉴요소들
const wrapEl = document.querySelector("#wrap");
const menuBtnEl = document.querySelector("#header .menu");
const navEl = document.querySelector("#nav");
const emptyEl = navEl.querySelector(".empty");
const closeBtnEl = navEl.querySelector(".navWrapper .close");

// 메뉴버튼클릭시, NB 활성화
menuBtnEl.addEventListener("click", () => {
  wrapEl.classList.add("disabled");
  navEl.classList.add("active");
});

// NB영역외 다른곳클릭시, NB 비활성화
emptyEl.addEventListener("click", () => {
  wrapEl.classList.remove("disabled");
  navEl.classList.remove("active");
});

// 닫기버튼클릭시, NB 비활성화
closeBtnEl.addEventListener("click", () => {
  wrapEl.classList.remove("disabled");
  navEl.classList.remove("active");
});
