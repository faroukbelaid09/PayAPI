const humbergerMenuBtn = document.querySelector(".humberger--menu");
const nav = document.querySelector(".nav");
const checkBoxBtn = document.querySelector(".contact--us__checkbox input");
const checkBoxTitle = document.querySelector(".contact--us__checkbox span");
const checkBoxAfter = document.querySelector(
  ".contact--us__checkbox input::after"
);

humbergerMenuBtn.addEventListener("click", (event) => {
  if (nav.classList.contains("show")) {
    setTimeout(() => {
      event.target.src = "./assets/shared/mobile/menu.svg";
    }, 400);
  } else {
    event.target.src = "./assets/shared/mobile/close.svg";
  }
  nav.classList.toggle("show");
});

checkBoxBtn.addEventListener("click", () => {
  checkBoxTitle.classList.toggle("active");
  checkBoxBtn.classList.toggle("active");
});
