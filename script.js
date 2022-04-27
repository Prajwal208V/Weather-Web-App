'use strict'
var inp=document.querySelector('.inp');
var celi=document.querySelector('.celi');
var far=document.querySelector('.far');
var city_name=document.querySelector('.paragraph1');
var hum=document.querySelector('.paragraph2');
var wind=document.querySelector('.paragraph3');
var cloud=document.querySelector('.paragraph4');
function fun(para1){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${para1}&appid=d3b6aaa7c8ae98a5395f93b296e793d1`)
    .then(res=> {
        if(!res.ok){
            throw res;
        }
        return res.json()
    })
    .then(data=>{
        console.log(data);
        city_name.textContent=data.name;
        celi.textContent=Math.round(((data.main.temp)-273.15) * 10) / 10;
        far.textContent=Math.round((((data.main.temp)-273.15)*(9/5)+32) * 10) / 10;
        hum.textContent=`Humidity: ${data.main.humidity}%`;
        wind.textContent=`Wind-Speed: ${Math.round((data.wind.speed)*18/5*10)/10} km/h`;
        cloud.textContent=`clouds: ${data.clouds.all} %`
    })
    .catch(err=>{
       alert('city not found');
    })
    
}
(()=>{
    fun('Bengaluru');
})();
inp.addEventListener('keyup', function(e) {
    if(e.keyCode===13){
      fun(inp.value);
    }
});
