const darkModeButton = document.querySelector('#button-Dark-Mode')
const textDarkMode = document.querySelector('.text-dark-button')
const darkModeIcon = document.querySelector('.fa-solid')

darkModeButton.addEventListener('click', darkModeSwitcher)
document.addEventListener('DOMContentLoaded', checkThemeUser())

//Light Mode Function
function lightMode(){
    darkModeButton.children[0].textContent = 'Light Mode'
    darkModeButton.children[1].classList.replace('fa-moon', 'fa-sun')
    // darkModeIcon.classList.add('fa-flip')
    // darkModeIcon.setAttribute('style', '--fa-animation-iteration-count: 2;') //STOPPED HERE, TRYING TO ANIMATE ICON WHEN CLICKED
}

//Dark Mode Function
function darkMode(){
    darkModeButton.children[0].textContent = 'Dark Mode'
    darkModeButton.children[1].classList.replace('fa-sun', 'fa-moon')
    // darkModeIcon.classList.add('fa-flip')
    // darkModeIcon.setAttribute('style', '--fa-animation-iteration-count: 2;')
}

//Toggle Switch
function darkModeSwitcher(){
    const darkModeAttribute = document.documentElement.getAttribute('data-theme')
    if(!darkModeAttribute || darkModeAttribute === 'light'){
        document.documentElement.setAttribute('data-theme', 'dark')
        darkMode()
        savethemeUser('dark')
    }else{
        document.documentElement.setAttribute('data-theme', 'light')
        lightMode()
        savethemeUser('light')
    }
}

//Save Theme in LocalStorage
function savethemeUser(theme){
    themePreference = {
            theme
        }
    localStorage.setItem('Theme User', JSON.stringify(themePreference))
}

//Check Theme in LocalSorage
function checkThemeUser(){
    const savedTheme = JSON.parse(localStorage.getItem('Theme User'));
    console.log(savedTheme)
    if(!savedTheme){
        savethemeUser('Light')
    }else{
        if(savedTheme.theme === 'light'){
            document.documentElement.setAttribute('data-theme', 'light')
            lightMode()
        }else{
            document.documentElement.setAttribute('data-theme', 'dark')
            darkMode()
        } 
    }
}

//Navigation
const nav = document.getElementById('nav')
const menuIcon = document.querySelector('.menu-icon')

function toggleMenu() {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active')
}

function hideMenu(){
  nav.classList.remove('active')
  menuIcon.classList.remove('active')
}