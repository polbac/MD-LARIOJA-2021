const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'

let theme = localStorage.getItem('theme') || THEME_LIGHT
const themeSwitchButton = document.getElementById('switch-theme')
const body = document.querySelector('body')

applyTheme()

function toggleTheme() {
    if (theme === THEME_LIGHT) {
        theme = THEME_DARK
    } else {
        theme = THEME_LIGHT
    }

    // terneario
    /* theme = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT */

    // escribir en el localStorage el theme
    localStorage.setItem('theme', theme)
    
    applyTheme()
}

function applyTheme() {
    if (theme === THEME_DARK) {
        body.classList.add('dark')
        themeSwitchButton.innerText = 'Change to light mode'
    } else {
        body.classList.remove('dark')
        themeSwitchButton.innerText = 'Change to dark mode'
    }
    
}

themeSwitchButton.addEventListener('click', toggleTheme)


const miJSON = '[{"name":"Guitar Fender Stratocaster","price":1000},{"name":"Guitar Fender Telecaster","price":1500}]'