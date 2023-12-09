const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let countdownDate = "2023-12-25T00:00";
let countDown = new Date(countdownDate).getTime();

let updateTime = setInterval(function(){
    let now = new Date().getTime();  // Corrected this line

    let difference = countDown - now;

    let dys = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((difference % (1000 * 60)) / 1000);
    
    days.innerHTML = dys < 10 ? "0" + dys : dys;
    hours.innerHTML = hrs < 10 ? "0" + hrs : hrs;
    minutes.innerHTML = mins < 10 ? "0" + mins : mins;
    seconds.innerHTML = secs < 10 ? "0" + secs : secs;

}, 1000);
