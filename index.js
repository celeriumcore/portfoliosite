const head = document.querySelectorAll('#head')
const header = document.querySelector('header')
const acceuil = document.querySelector('#acceuil')
const apropos = document.querySelector('#apropos')
const projets = document.querySelector('#projets')
const contact = document.querySelector('#contact')

const opacity = [{transform: 'translateY(-100px)',opacity: '0'},{transform: 'translateY(0)',opacity: '1'}]

const nopacity = [{transform: 'translateY(0px)',opacity: '1'},{transform: 'translateY(-100px)',opacity: '0'}]

const nopastill = [{opacity: '1'},{opacity: '0'}]

const options = {duration: 750,  fill: "both", easing: "cubic-bezier(.38,.32,.48,1.3)" }


const isObserve0 = (entries) => {
    entries.forEach((entry) => { 
        if (entry.isIntersecting) { header.animate(nopacity,options),
            head.forEach((btns) => {
                btns.parentElement.querySelector('.active').classList.remove('active')
                
                btns.parentElement.querySelector('.acceuil').classList.add('active')
            })
        }
        else { header.animate(opacity, options)}
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
    } )}
    
    
    
    
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
    
    const observer0 = new IntersectionObserver(isObserve0,{threshold: 0.25})
    const observer1 = new IntersectionObserver(isObserve1,{threshold: 0.9})
    const observer2 = new IntersectionObserver(isObserve2,{threshold: 0.9})
    const observer3 = new IntersectionObserver(isObserve3,{threshold: 0.9})
    
    observer0.observe(acceuil)
    observer1.observe(apropos)
    observer2.observe(projets)
    observer3.observe(contact)
    
    
    
    const loading = document.querySelector('.loading')
    const logo = document.querySelector('.logo-loading')
    const loaded = {duration: 1500, fill:'both', easing: "cubic-bezier(.74,.04,.98,.94)"}
    const loadedlogo = {delay: 750, duration: 450, fill:'both', easing: "cubic-bezier(.89,.01,.59,.74)"}
    
    const rotate = [{transform: 'rotateY(0deg)'},{transform: 'rotateY(359deg)'}]
    const loop = {iterations: Infinity , duration: 2000, fill: 'both', easing: 'cubic-bezier(.61,.07,.55,1)'}
    const logofx = [{transform: 'scale(1)'},{transform: 'scale(1.5)'},{transform: 'scale(0)'}]
    
    logo.animate(rotate,loop)
    
    const textload = document.querySelector('h5');
    let intervalId;
    

        intervalId = setInterval(changeText, 1000);
    
    function changeText() {
        // Récupérez le texte actuel
        let currentText = textload.innerText;
    
        // Déterminez quelle est la prochaine étape à effectuer en fonction du texte actuel
        if (currentText.endsWith('...')) {
            textload.innerText = 'Veuillez patienter, la page se charge entièrement';
        } else {
            textload.innerText += '.';
        }
    }
    
    const page= document.querySelector('*')
    page.style.overflow = 'hidden';


    window.addEventListener('load', () => {
        clearInterval(intervalId);
        loading.animate(nopastill,loaded)
        textload.animate(nopastill,loaded)
        textload.innerText = 'Le site est chargé, merci de votre patience !'
        logo.animate(logofx,loadedlogo)
        
        setTimeout(() => {
            page.style.overflow = 'visible';
        }, 1500);
    })

