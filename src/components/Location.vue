<template>
    <div class="location" id="location-modal">
        <header class="location-header">
            <i class="fa-solid fa-location-dot location-header__icon"></i>
            <p class="location-header__text" id="location">Buscando ubicacion.....</p>
        </header>
        <footer class="location-footer">
            <div class="location-footer__coords">
                <p class="location-footer__pais" id="pais">Buscando....</p>
                <p class="location-footer__municipio" id="municipio">Buscando...</p>
            </div>
            <div class="location-footer__buttons">
                <button class="close" @click="closeLocation">Cerrar</button>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    .location{
        position: absolute;
        top: 100px;
        left: 50%;
        width: 650px;
        height: 300px;
        background-color: var(--background-color);
        transform: translate(-50%);
        z-index: 100;
    }
    .location-header,
    .location-footer{
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
    }
    .location-header{
        height: 25%;
        padding: 10px;
        background-color: #444;
    }
    .location-footer{
        height: 75%;
        flex-direction: column;
    }
    .location-header__text{
        font-size: 1.1rem;
    }
    .location-header__icon{
        font-size: 1.5rem;
        color: var(--secondary-color);
    }
    .location-footer__coords{
        text-align: center;
    }
    .location-footer__pais{
        font-size: 1.5em;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .location-footer__municipio{
        font-size: 1.1em;
    }
    .close{
        width: 300px;
        height: 40px;
        font-size: 1rem;
        padding: 5px;
        border: none;
        outline: none;
        letter-spacing: 1px;
        border-radius: 5px;
        background-color: var(--secondary-color);
    }

    .location-close{
        transform: scale(0);
        transition: transform .4s ease;
    }

    @media(Hover:hover){
        .close:hover{
            cursor: pointer;
        }
    }
</style>

<script>
import axios from 'axios'

export default{
    name: 'Location',
    data(){
        return{
            longitude: null ?? 0,
            latitude: null ?? 0,
            ubication: false
        }
    },
    methods:{
        getLocation(){
            const location = document.getElementById('location')
            const pais = document.getElementById('pais')
            const municipio = document.getElementById('municipio')
            const modal = document.getElementById('location-modal');
            
            if(!navigator.geolocation) throw new Error('Tu navegador no es compatible.')

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(success,error,options)
            }

            let options = {
                EnableHighAccuracy: true,
                MaximunAge: 0
            }

            load()

            async function success(geoLocationPosition){
                let coords = geoLocationPosition.coords;
                
                await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`)
                    .then(res => res.json())
                    .then(data => {
                        store(!modal.classList.contains('location-close'))
                        location.innerHTML = 'Ubicación encontrada'
                        pais.innerHTML = data.address.state + ', ' + data.address.country
                        municipio.innerHTML = data.address.state + ', ' + data.address.region + ', ' + data.address.road
                })

                await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                    opcion: 15,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }).catch(err => console.log(err))
            }

            function load(){
                if('sessionStorage' in window && window['sessionStorage'] !== null){
                    const coordenadas = sessionStorage.getItem('coordenadas');

                    (coordenadas === 'true') && modal.classList.add('location-close')
                }
            }

            function store(value){
                if('sessionStorage' in window && window['sessionStorage'] !== null){
                    sessionStorage.setItem('coordenadas',value)
                }else{
                    throw new Error('Your computer doesnt suppor session storage.')
                }
            }

            function error(){
                
                console.error('El usuario ha denegado el permiso de geolocalizacion')
            }

        },
        closeLocation(e){
            const modal = document.getElementById('location-modal');

            (e.target.classList.contains('close')) && modal.classList.add('location-close')
        }
    },
    mounted(){
        return this.getLocation()
    }
}
</script>
