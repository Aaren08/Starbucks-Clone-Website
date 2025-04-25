// Toggle mobile menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

// Toggle hidden links and rotate arrow-down for multiple sections
document.querySelectorAll(".arrow-down").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");

    // Find the closest .links-inner and toggle its .hidden-links
    const parent = arrow.closest(".links-inner");
    const hiddenLinks = parent.querySelector(".hidden-links");

    if (hiddenLinks) {
      hiddenLinks.classList.toggle("show");
    }
  });
});
