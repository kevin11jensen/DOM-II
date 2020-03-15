const mainNav = document.querySelector('.main-navigation')

mainNav.addEventListener('mouseenter', () => {
    mainNav.style.backgroundColor = 'black'
    mainNav.style.color = 'white'
    
})

const links = document.querySelectorAll('.nav-link')

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'white';
    })
})


const busImg = document.querySelector('img')

busImg.addEventListener('mouseover', () => {
    busImg.style.transform = 'scale(1.1)'
    busImg.style.transition = 'all .5s'
})