const mainNav = document.querySelector('.main-navigation')

mainNav.addEventListener('mouseenter', () => {
    mainNav.style.backgroundColor = 'black'
    mainNav.style.color = 'white'
})

const links = document.querySelector('.nav-link')

links.forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'white'
    })
})