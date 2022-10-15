<template>
    <div class="location" id="location-modal"
    data-test-id="location-test">
        <header class="location-header">
            <i class="fa-solid fa-location-dot location-header__icon"></i>
            <p class="location-header__text" id="location"
            data-test-id="location-search">Buscando ubicacion.....</p>
        </header>
        <footer class="location-footer">
            <div class="location-footer__coords">
                <div class="location-footer__text" id="geolocation">
                    <p class="location-footer__pais" id="pais"
                    data-test-id="location-pais">Buscando....</p>
                    <p class="location-footer__municipio" id="municipio"
                    data-test-id="location-municipio">Buscando...</p>
                </div>
                <div class="location-footer__municipios" id="select">
                    <label for="municipios">Seleccione su Municipio</label>
                    <select name="municipios" class="location-footer__select" required>
                        <option v-for="(item,index) in municipios" :key="index" :value="item.Latitud + ',' + item.Longitud"
                        class="location-footer__option">{{item.Municipio}}</option>
                    </select>
                </div>
            </div>
            <div class="location-footer__buttons">
                <button class="location-footer__close" @click="closeLocation"
                data-test-id="location-button">Cerrar</button>
            </div>
        </footer>
    </div>
</template>

<style scoped>
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
            ubication: false,
            coordenadas: null,
            municipios: []
        }
    },
    methods:{
        getMunicipio(){
           const getMunicipios = async()=>{
                try{
                    const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{opcion: 17})
                    if(res.status !== 200) throw new Error(res.statusText)
                    this.municipios = res.data
                }catch(e){
                    console.error(e)
                }
           } 
           getMunicipios();
        },
        getLocation(){
            const location = document.getElementById('location')
            const pais = document.getElementById('pais')
            const municipio = document.getElementById('municipio')
            const modal = document.getElementById('location-modal');
            const geolocation = document.getElementById('geolocation');
            const select = document.getElementById('select');

            
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
                    .then(res => res.status == 200 ? res.json() : console.log(res.statusText))
                    .then(data => {
                        store(!modal.classList.contains('location-close'))
                        setTimeout(()=>{
                            location.innerHTML = 'Ubicación encontrada.'
                            pais.innerHTML = data.address.state + ', ' + data.address.country;
                            (data.address.road === undefined)
                                ? municipio.innerHTML = data.address.state + ', ' + data.address.region + ', ' + data.address.neighbourhood
                                : municipio.innerHTML = data.address.state + ', ' + data.address.region + ', ' + data.address.road
                        },5000)
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
                const options = document.querySelectorAll('.location-footer__select')
                geolocation.classList.add('location--hide')
                select.classList.add('location--show')
                
                options.forEach(item => {
                    item.addEventListener('change',async (e)=>{
                        if(e.target.classList.contains('location-footer__select')){
                            let latitud = item.value.substring(0,7)
                            let longitud = item.value.substring(8)

                            await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitud}&lon=${longitud}`)
                            .then(res => res.json())
                            .then(data => {
                                setTimeout(()=>{
                                    geolocation.classList.remove('location--hide')
                                    location.innerHTML = 'Ubicación encontrada.'
                                    pais.innerHTML = data.address.state + ', ' + data.address.country
                                    
                                    if(data.address.road === undefined){
                                        if(data.address.suburb !== undefined){
                                            municipio.innerHTML = data.address.town + ', ' + data.address.suburb
                                        }else{
                                            municipio.innerHTML = data.address.town + ', ' + data.address.neighbourhood
                                        }
                                    }else{
                                        municipio.innerHTML = data.address.town + ', ' + data.address.road
                                    }
                                },2000)
                            })

                            await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                                opcion: 15,
                                latitude: latitud,
                                longitude: longitud
                            }).catch(err => console.log(err))
                        }
                    })
                })
                console.error('El usuario ha denegado el permiso de geolocalizacion')
            }

        },
        closeLocation(e){
            const modal = document.getElementById('location-modal');

            (e.target.classList.contains('location-footer__close')) && modal.classList.add('location-close')
        }
    },
    mounted(){
        return this.getLocation(),this.getMunicipio()
    }
}
</script>
