const navButton = document.getElementById("menu");
const links = document.querySelector(".links");



navButton.addEventListener("click", function() {
    links.classList.toggle("active");
})

const menuLinks = document.querySelectorAll(".links a");

menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    links.classList.remove("active");
  });
});