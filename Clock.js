const hour = document.getElementById('hour');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

function Getting_Time(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();

    let HourRotaion = 30*HH + 0.5*MM;
    let MinuteRotaion = 6*MM;
    let SecondRotaion = 6*SS;
    hour.style.transform = `rotate(${HourRotaion}deg)`;
    minute.style.transform = `rotate(${MinuteRotaion}deg)`;
    second.style.transform = `rotate(${SecondRotaion}deg)`;
}

setInterval(Getting_Time,1000);

