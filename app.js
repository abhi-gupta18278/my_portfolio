
const toggle = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

toggle.addEventListener("click", () => {
  console.log("click toggle");
});

