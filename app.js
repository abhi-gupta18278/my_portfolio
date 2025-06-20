const toggle = document.querySelector(".menu-icon");
const right = document.querySelector(".right");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
let toggleValues = false;
toggle.addEventListener("click", () => {
  right.classList.add("activevalue");
  toggleValues = !toggleValues;
  if (!toggleValues) {
    right.classList.remove("activevalue");
  }
});
