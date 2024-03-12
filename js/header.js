const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burgerMenu");
const burgerLine1 = document.querySelector(".burgerLine1");
const burgerLine2 = document.querySelector(".burgerLine2");
const b_nav = document.querySelector(".b_nav");

const logo = document.querySelector(".logo");

function header_small() {
  if (scrollY > 249) {
    header.classList.add("scroll");
    burgerMenu.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    burgerMenu.classList.remove("scroll");
  }
}

document.addEventListener("scroll", () => {
  header_small();
});

logo.onclick = () => {
  location.href = "/index.html";
};

burger.onclick = () => {
  burgerMenu.classList.toggle("active");
  burger.classList.toggle("active");
  burgerLine1.classList.toggle("active");
  burgerLine2.classList.toggle("active");
  b_nav.classList.toggle("active");
};
