const navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  window.scrollY
    ? navBar.classList.add("nav-move")
    : navBar.classList.remove("nav-move");
});
