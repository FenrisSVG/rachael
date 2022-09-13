ScrollReveal().reveal(".container",{delay:5e3}),ScrollReveal().reveal(".section",{delay:5e3}),ScrollReveal().reveal(".video-container",{delay:5e3}),ScrollReveal().reveal(".banner",{delay:5e3}),ScrollReveal().reveal(".socials",{delay:5e3}),ScrollReveal().reveal(".chatbox",{delay:5e3}),ScrollReveal().reveal(".contact",{delay:5e3}),ScrollReveal().reveal(".maps",{delay:5e3}),ScrollReveal().reveal(".footer",{delay:5e3});

const flags = document.getElementById('flags')
const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguage = async (language) =>{
    const requestJson = await fetch(`../languages/${language}.json`)
    const texts = await requestJson.json()
    textsToChange.forEach(text => {
        const section = text.dataset.section
        const value = text.dataset.value
        text.innerHTML = texts[section][value]
    })
}

load()

if(flags){
    flags.addEventListener('click',(e)=>{
        store(e.target.parentElement.dataset.language)
        changeLanguage(e.target.parentElement.dataset.language)
    })
}

function load(){
    const language = localStorage.getItem('language');

    (language == 'es')
        ? changeLanguage('es')
        : changeLanguage('en')
    
}

function store(value){
    localStorage.setItem('language',value)
}