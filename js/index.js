//nav
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

//header img
const busImg = document.querySelector('img')

busImg.addEventListener('mouseover', () => {
    busImg.style.transform = 'scale(1.1)'
    busImg.style.transition = 'all .5s'
})

//header text
const headText = document.querySelector('.intro p')
// console.log(headText)
headText.addEventListener('dblclick', () => {
    headText.style.backgroundColor = 'dodgerblue'
})

//content section
const conImg = document.querySelector('.img-content')
// console.log(conImg)
conImg.addEventListener('wheel', () => {
    conImg.style.transform = 'scale(1.1)'
    conImg.style.transition = 'all .5s'
})

//buttons
const btns = document.querySelectorAll('.btn')
// console.log(btns)
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'blue'
    })
})

//footer
const footer = document.querySelector('.footer p')

footer.addEventListener('mouseleave', () => {
    footer.style.backgroundColor = 'black'
    footer.style.color = 'white'
})