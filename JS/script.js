let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 101;
  if (offset > 303) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "%";
});
document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 101;
  if (offset < 0) {
    offset = 303;
  }
  sliderLine.style.left = -offset + "%";
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});

let window_scroll_top = window.pageYOffset
let window_scroll_left = window.pageXOffset
console.log(window_scroll_top, window_scroll_left, 'прокрутилось');

let link1 = document.querySelector('.links-box').children[0];
let link2 = document.querySelector('.links-box').children[1];
let link3 = document.querySelector('.links-box').children[2];

function jakor1(){
  event.preventDefault()
  window.scrollBy(0, 1150)
  let wind_scrollTop = window.pageYOffset
  console.log(wind_scrollTop);
}
function jakor2(){
  event.preventDefault()
  window.scrollBy(0, 1848)
  let wind_scrollTop = window.pageYOffset
  console.log(wind_scrollTop);
}
function jakor3(){
  event.preventDefault()
  window.scrollBy(0, 2868)
  let wind_scrollTop = window.pageYOffset
  console.log(wind_scrollTop);
}

link1.onclick = jakor1
link2.onclick = jakor2
link3.onclick = jakor3