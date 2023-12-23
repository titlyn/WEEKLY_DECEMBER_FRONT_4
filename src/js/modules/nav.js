const navButton = document.querySelector(".menu");
const links = document.getElementById("#links");

navButton.addEventListener("click", function() {
    links.classList.toggle("active");
})