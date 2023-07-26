// 메뉴 요소
const navEl = document.querySelector("#header .nav");
const menuBtnEl = navEl.querySelector(".menu");

let isOpen = false;
// 메뉴버튼클릭시, GNB 활성화 및 비활성화
menuBtnEl.addEventListener("click", () => {
  if (!isOpen) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
  isOpen = !isOpen;
});

// 메뉴외에 다른요소 클릭시 GNB 비활성화
menuBtnEl.addEventListener("blur", () => {
  navEl.classList.remove("active");
  isOpen = false;
});
