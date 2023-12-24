import { AOS_ELMT } from "./elements.js";

const visible = []

/**
 * @type {HTMLBodyElement}
 */
const scrollEl = document.querySelector('body')

const callback = function (e) {
    AOS_ELMT.forEach((el, i) => {
        // if (windowScrollY > el.offsetTop - (window.innerWidth / 1.6) && !el.classList.contains('visile')) {
        if ((el.getBoundingClientRect().top < scrollEl.clientHeight - 120) && !el.classList.contains('visile')) {
            el.classList.add('visible')
            if (!visible.includes(i)) visible.push(i)

        }
    })

    if (visible.length == AOS_ELMT.length) {
        scrollEl.removeEventListener('scoll', callback)
    }
}

export function setUpAOS() {
    scrollEl.addEventListener('scroll', callback)
}