// 메뉴 요소들
const headerEl = document.querySelector("#header");
const navListEl = headerEl.querySelectorAll(".nav > ul > li");

// 메뉴 이벤트
navListEl.forEach((el) => {
  // GNB 메뉴 오버시, LNB 메뉴 활성화
  el.addEventListener("mouseover", function () {
    headerEl.classList.add("active");
    el.classList.add("active");
  });
  // GNB 메뉴 아웃시, LNB 메뉴 비활성화
  el.addEventListener("mouseout", function () {
    headerEl.classList.remove("active");
    el.classList.remove("active");
  });
});
