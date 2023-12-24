import { NAV_LINKS } from "./elements.js";

const navButton = document.querySelector("#menu");
const links = document.getElementById("center");

export function setUpNav() {
	NAV_LINKS.forEach(link => {
		link.addEventListener("click", function () {
			toggleActiveLink(link)
			links.classList.remove("active");
		});
	});

	navButton.addEventListener("click", function () {
		links.classList.toggle("active");
	})
}

export const toggleActiveLink = (function(){
    let lastActiveLink = [...NAV_LINKS].find( link => link.classList.contains('active'))

    /**
     * 
     * @param {HTMLAnchorElement} newActiveLink 
     */
    return function(newActiveLink){
        lastActiveLink.classList.remove('active')
        newActiveLink.classList.add('active')

        lastActiveLink= newActiveLink
    }
})()