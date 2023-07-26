// 슬라이드 요소
const imgListEl = document.querySelectorAll("#slider .image .imageWrapper");
const currentEl = document.querySelector("#slider .control .text .current");
const totalEl = document.querySelector("#slider .control .text .total");
const btnEl = document.querySelectorAll("#slider .control .icon button");
const prevBtnEl = btnEl[0];
const pauseBtnEl = btnEl[1];
const nextBtnEl = btnEl[2];
const pauseBtnImageEl = pauseBtnEl.querySelector("img");

// 슬라이드 컨트롤시 필요한 데이터
const imgCount = imgListEl.length;
let currentIndex = 0;
let isPlay = true;

// 슬라이드 초기화
currentEl.innerHTML = currentIndex + 1;
totalEl.innerHTML = imgCount;
imgListEl.forEach((el) => {
  el.style.opacity = "0";
});
imgListEl[0].style.opacity = "1";

// 3초간격으로 슬라이드 동작하기
let sliderInterval = setInterval(() => moveSlider(0), 3000);

// 이전버튼클릭이벤트
prevBtnEl.addEventListener("click", () => moveSlider(1));

// 다음버튼클릭이벤트
nextBtnEl.addEventListener("click", () => moveSlider(2));

// 중지버튼클릭이벤트
pauseBtnEl.addEventListener("click", () => {
  if (isPlay) {
    // 슬라이드 멈추기
    pauseBtnImageEl.setAttribute("src", "images/icon/play.svg");
    pauseBtnImageEl.setAttribute("alt", "재생아이콘");
    clearInterval(sliderInterval);
  } else {
    // 슬라이드 재생하기
    pauseBtnImageEl.setAttribute("src", "images/icon/pause.svg");
    pauseBtnImageEl.setAttribute("alt", "중지아이콘");
    sliderInterval = setInterval(moveSlider(0), 3000);
  }
  isPlay = !isPlay;
});

// 슬라이드 움직이는 함수
function moveSlider(e) {
  let nextIndex = 0;
  if (e == 0) nextIndex = (currentIndex + 1) % imgCount;
  if (e == 1) nextIndex = currentIndex == 0 ? imgCount - 1 : currentIndex - 1;
  if (e == 2) nextIndex = currentIndex == imgCount - 1 ? 0 : currentIndex + 1;

  // 슬라이드 변경하기
  imgListEl[currentIndex].style.opacity = "0";
  imgListEl[nextIndex].style.opacity = "1";
  // 숫자변경하기
  currentEl.innerHTML = nextIndex + 1;

  currentIndex = nextIndex;
}
