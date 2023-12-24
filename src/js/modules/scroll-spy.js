import {toggleActiveLink} from './nav.js'
import {NAV_LINKS, SCROLL_SPY_ELMT} from './elements.js'

const TRHESHOLD = 0.4
/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */
function callback( entries, observer ){
    entries.forEach( (entry) => {
        if(entry.intersectionRatio > TRHESHOLD){
            const matchingEntryIndex = [...SCROLL_SPY_ELMT].findIndex( link => link.id == entry.target.id)
            toggleActiveLink(NAV_LINKS[matchingEntryIndex])
        }
    } )
}

export const setUpScrollSpy = ()=>{
    const observer = new IntersectionObserver(callback, {threshold: TRHESHOLD})
    SCROLL_SPY_ELMT.forEach( entry => observer.observe(entry))
    
    NAV_LINKS.forEach( link => {
        link.addEventListener('click', function(){
            toggleActiveLink(link)
        }) 
    })
} 
