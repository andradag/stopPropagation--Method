// target HTML elements
const carousel = document.querySelector(".carouselbox");
const next = carousel.querySelector(".next");
const prev = carousel.querySelector(".prev");

// declare global variables
const images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

let index = 0;
let currentImage;

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

const navigate = function (direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
};

const handleCarouselClick = function () {
  window.location.href = images(index);
};

const handleNext = function (event) {
  event.stpPropagation();

  navigate(1);
};

const handlePrev = function (event) {
  event.stopPropagation();

  navigate(-1);
};

// register event listeners
carousel.addEventListener("click", handleCarouselClick);
next.addEventListener("click", handleNext);
prev.addEventListener("click", handlePrev);

//  set the background image of the carousel to a random image
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

navigate(0);
