'use strict'
var inp=document.querySelector('.inp');
var celi=document.querySelector('.celi');
var far=document.querySelector('.far');
var city_name=document.querySelector('.paragraph1');
var hum=document.querySelector('.paragraph2');
var wind=document.querySelector('.paragraph3');
var cloud=document.querySelector('.paragraph4');
function fun(para1){
    var wether = new XMLHttpRequest();
    wether.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${para1}&appid=d3b6aaa7c8ae98a5395f93b296e793d1`);
    wether.send();
    wether.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
        city_name.textContent=data.name;
        celi.textContent=Math.round(((data.main.temp)-273.15) * 10) / 10;
        far.textContent=Math.round((((data.main.temp)-273.15)*(9/5)+32) * 10) / 10;
        hum.textContent=`Humidity: ${data.main.humidity}%`;
        wind.textContent=`Wind-Speed: ${Math.round((data.wind.speed)*18/5*10)/10} km/h`;
        cloud.textContent=`clouds: ${data.clouds.all} %`
    });
}
inp.addEventListener('keyup', function(e) {
    if(e.keyCode===13){
      console.log(inp.value);
      fun(inp.value);
    }
});

