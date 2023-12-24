const navButton = document.querySelector("#menu");
const links = document.getElementById("center");
const menuLinks = document.querySelectorAll(".links a");

menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    links.classList.remove("active");
  });
});

navButton.addEventListener("click", function() {
    links.classList.toggle("active");
})