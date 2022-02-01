<template>
    <section class="section-more">
        <h2 class="section-more__title">Configuracion de la Pagina</h2>
        <div class="card-more">
            <div class="card-more__container">
                <div class="card-more__image" id="theme-image"></div>
                <div class="card-more__button">
                    <p class="card-more__text" id="theme-text">Dark Mode</p>
                    <div class="change-theme" id="theme-button" @click="moveTheme">
                        <div class="change-theme__button"></div>
                    </div>
                </div>
            </div>
            <div class="card-more__container">
                <div class="card-more__image" id="theme-image" data-language="es"></div>
                <div class="card-more__button">
                    <p class="card-more__text" id="theme-text">Spanish</p>
                    <div class="change-theme" id="theme-button" @click="moveTheme">
                        <div class="change-theme__button"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card-more__image{
    width: 800px;
    height: 220px;
    background-image: url('../assets/desktop/planets-sprite.jpg');
    background-position: -245px -65px;
    background-size: cover;
    /* background-repeat: no-repeat; */
    transition: background-position .5s ease-in;
}

.card-more__image--change{
    background-position: 245px 275px;
}
</style>

<script>
export default {
    name: 'More',
    methods:{
        moveTheme(e){
            const themeButton = document.getElementById('theme-button')
            const themeImage = document.getElementById('theme-image')
            const themeText = document.getElementById('theme-text')
            const html = document.querySelector('html')
            let all_headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");

            if(e.target.classList.contains('change-theme__button')){
                themeButton.firstElementChild.classList.toggle('change-theme__button--move')
                themeImage.classList.toggle('card-more__image--change')
                themeText.innerHTML = 'Light Mode'
                html.classList.toggle('lightmode')
                console.log(all_headings)
                //all_headings.classList.toggle('titlesLight')
                this.storage(html.classList.contains('lightmode'))
            }

            if(!themeImage.classList.contains('card-more__image--change'))
            themeText.innerHTML = 'Dark Mode'
        },
        load(){
            const lightmode = localStorage.getItem('lightmode')
            const html = document.querySelector('html')
            const themeButton = document.getElementById('theme-button')
            const themeImage = document.getElementById('theme-image')
            const themeText = document.getElementById('theme-text')

            if(!lightmode){
                this.storage('false')
            }else if(lightmode == 'true'){                
                html.classList.add('lightmode')
                themeButton.firstElementChild.classList.add('change-theme__button--move')
                themeImage.classList.add('card-more__image--change')
                themeText.innerHTML = 'Light Mode'
            }
        },
        storage(value){
            localStorage.setItem('lightmode',value)
        }
    },
    mounted(){
        return this.load()
    }
}
</script>