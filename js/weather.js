const APIkey='efa72f64823f9c2dfebccf893840c02e';

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log(lat, lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIkey}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const city=document.querySelector('#weather span:first-child');
            const weather=document.querySelector('#weather span:last-child');
            city.innerText=data.name;
            weather.innerText=`${data.weather[0].main}/${data.main.temp}°C`;
        });
}
function onGeoError(){
    alert('whether error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);