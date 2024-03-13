const menu = document.querySelector(".fa-bars");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
  navlist.classList.toggle("active");
  menu.classList.toggle("fa-xmark");
});
