//watech
const hours=document.getElementById('hours')
const time=document.getElementById('time')
const cnt=document.querySelectorAll('.container')


setInterval(function(){
const dt=new Date()
let hour=dt.getHours()
let min=dt.getMinutes()

if(hour<10 ){
   hour='0'+ hour
   
}
if(min<10){
    min='0'+min
}
hours.innerText=hour+':'+min
},1000)

//api

const apiKey="f4c5032f2e3d818026a938458595139d"
const btn=document.getElementById('btn')
const inputName=document.getElementById('inputName')
const humidityElem=document.getElementById('humidity')
const speedElem=document.getElementById('speed')
const town=document.getElementById('town')
const tempElem=document.getElementById('temp')
const coordElem=document.getElementById('coord')
const icons=document.getElementById('icon')
const icons01=document.getElementById('icon01')
const icons02=document.getElementById('icon02')
const content=document.getElementById('content')

const getApi=async(city)=>{
    const apiWhetherURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res=await fetch(apiWhetherURL)
    const data=await res.json()
    return data
}
const showData=async(city)=>{ 
    const data= await getApi(city)
    
    console.log(data)
    if(data.cod=='400'){
        console.log('Erro não existe cidade')
        alert('Não existe essa cidade, tente novamente...')
        speedElem.innerText=``
        humidityElem.innerText=``
        tempElem.innerText=``
        coordElem.innerText=``
        
    }else{
    speedElem.innerText=`${data.wind.speed}m/s`
    humidityElem.innerText=`${data.main.humidity}%`
    tempElem.innerText=`${parseInt(data.main.temp)}C°`
    coordElem.innerText=`Lon: ${parseInt(data.coord.lon)} Lat: ${parseInt(data.coord.lat)}`
    }
}

//search and button
async function active(){
    const data= await getApi(city)

    if(content.classList.contains('hidden') && data.cod!='400'){
        content.classList.remove('hidden')
        content.classList.add('iconC')
    }else if(data.cod=='400'){
        content.classList.remove('iconC')
        content.classList.add('hidden')
    }
    
    if(icons.classList.contains('hide') && data.cod!='400'){
        icons.classList.remove('hide')
        icons.classList.add('icon')
    }else if(data.cod=='400'){
        icons.classList.remove('icon')
        icons.classList.add('hide')
    }

    if(icons01.classList.contains('hide') && data.cod!='400'){
        icons01.classList.remove('hide')
        icons01.classList.add('icon')
    }else if(data.cod=='400'){
        icons01.classList.remove('icon')
        icons01.classList.add('hide')
    }

    if(icons02.classList.contains('hide') && data.cod!='400'){
        icons02.classList.remove('hide')
        icons02.classList.add('icon')
    }else if(data.cod=='400'){
        icons02.classList.remove('icon')
        icons02.classList.add('hide')
    }

}

//event the of button
btn.addEventListener('click',(e)=>{
    e.preventDefault()
   city=inputName.value
   town.innerText=city
   showData(city)
   inputName.value=''
   inputName.focus()
   active()
})


//btn modeDark-light

const btnMode=document.getElementById('mode')

btnMode.addEventListener('click', ()=>{
    const mode=document.getElementById('container')
    const iconSunMoon=document.getElementById('modeDark-light')

    if(mode.classList.contains('dark') && iconSunMoon.classList.contains('fa-sun')){
        mode.classList.remove('dark')
        mode.classList.add('light')
        iconSunMoon.classList.remove('fa-sun')
        iconSunMoon.classList.add('fa-moon')
    } else{
        mode.classList.remove('light')
        mode.classList.add('dark')
        iconSunMoon.classList.remove('fa-moon')
        iconSunMoon.classList.add('fa-sun')
    }

})

//imgs do perfil
 const imgs=document.getElementById('imgs')

 imgs.addEventListener('click', ()=>{
    const perfil=document.getElementById('perfil')
    const perfil01=document.getElementById('perfil01')

    
    if(perfil.classList.contains('show')){
        perfil.classList.remove('show')
        perfil.classList.add('hide')
        perfil01.classList.add('show')
        perfil01.classList.remove('hide')
        

    }else{
        perfil.classList.remove('hide')
        perfil.classList.add('show')
        perfil01.classList.add('hide')
        perfil01.classList.remove('show')
        

    }
    
   
    
 })