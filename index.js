const head = document.querySelectorAll('#head')

const acceuil = document.querySelector('#acceuil')
const apropos = document.querySelector('#apropos')
const projets = document.querySelector('#projets')
const contact = document.querySelector('#contact')


const isObserve0 = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            head.forEach((btns) => {
                btns.parentElement.querySelector('.active').classList.remove('active')
            
                btns.parentElement.querySelector('.acceuil').classList.add('active')
            })
        }
    })
}

const isObserve1 = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            head.forEach((btns) => {
                btns.parentElement.querySelector('.active').classList.remove('active')
            
                btns.parentElement.querySelector('.apropos').classList.add('active')
            })
        }
    })
}

const isObserve2 = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            head.forEach((btns) => {
                btns.parentElement.querySelector('.active').classList.remove('active')
            
                btns.parentElement.querySelector('.projets').classList.add('active')
            })
        }
    })
}

const isObserve3 = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            head.forEach((btns) => {
                btns.parentElement.querySelector('.active').classList.remove('active')
            
                btns.parentElement.querySelector('.contact').classList.add('active')
            })
        }
    })
}

const observer0 = new IntersectionObserver(isObserve0,{threshold: 0.9})
const observer1 = new IntersectionObserver(isObserve1,{threshold: 0.9})
const observer2 = new IntersectionObserver(isObserve2,{threshold: 0.9})
const observer3 = new IntersectionObserver(isObserve3,{threshold: 0.9})

observer0.observe(acceuil)
observer1.observe(apropos)
observer2.observe(projets)
observer3.observe(contact)

head.forEach((btns) => {
    btns.addEventListener('click', () => {
        btns.parentElement.querySelector('.active').classList.remove('active')
        btns.classList.add('active')
    })
})

