document.addEventListener('DOMContentLoaded', function(){
    const headerContainer = document.querySelector('header')
    const iconsContainer = document.querySelector('.icons-container')
    
    setTimeout(() => {
        // Header Element
        headerContainer.style.letterSpacing = '3px'
        headerContainer.style.filter = 'none'
        //Icons Container
        iconsContainer.style.filter = 'none'
        iconsContainer.style.letterSpacing = '3px'
    }, 100)

})
