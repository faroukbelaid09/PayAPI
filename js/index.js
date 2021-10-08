const humbergerMenuBtn = document.querySelector(".humberger--menu");
const nav = document.querySelector(".nav");

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
