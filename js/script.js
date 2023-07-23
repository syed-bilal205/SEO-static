const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("fa-times");
});

const themeButton = document.querySelector("#theme-btn");

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("fa-sun");
});

// themeButton.onclick = () => {
//   themeButton.classList.toggle("fa-sun");
// };

window.onscroll = () => {
  navbar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
};

console.log(navbar);
