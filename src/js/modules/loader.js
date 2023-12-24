const body = document.querySelector('body')

export function setUpLoader(){
    window.addEventListener('load', ()=>{
        body.classList.add('loaded')
    })
}