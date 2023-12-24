const storageKey = 'figma-land-isLight'
const rootEl = document.querySelector('html')
const lightToggler = document.querySelector('#light')
const darkToggler = document.querySelector('#dark')

function setToLightTheme(isLight = false){
    if(isLight) {
        rootEl.classList.add('light')
    }
    else {
        rootEl.classList.remove('light')
    }
    saveTheme(isLight)
}

function saveTheme(isLight = false){
    localStorage.setItem(storageKey, isLight)
}

export function setUpTheme(){
    const save = localStorage.getItem(storageKey)=='true'
    setToLightTheme(save)

    lightToggler.addEventListener('click', () => setToLightTheme(true))
    darkToggler.addEventListener('click', () => setToLightTheme(false))
}