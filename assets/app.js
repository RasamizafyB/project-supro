//Hamburger Menu
const open = document.querySelector('.open-hamburger');
const close = document.querySelector('.close-hamburger')
const menu = document.querySelector('.nav-hamburger');

open.addEventListener("click", function() {
    menu.style.opacity = 0.95;
    menu.style.zIndex = 2;
})

close.addEventListener("click", function() {
    menu.style.opacity = 0;
    menu.style.zIndex = -2;
})

//Time for the deal of the day

const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

setInterval(refresh, 1000)

function refresh() {
    let today = new Date();
    
    let todayHours = today.getHours();
    let todayMinutes = today.getMinutes();
    let todaySeconds = today.getSeconds();
    
    let hoursGap = 23 - todayHours;
    let minutesGap = 59 - todayMinutes;
    let secondsGap = 59 - todaySeconds;
    
    hour.innerHTML = hoursGap;
    minute.innerHTML = minutesGap;
    second.innerHTML = secondsGap;

    console.log(hour.textContent)

    if (hour.textContent<10) {
        hour.textContent = "0" + hour.textContent;
    }
    if (minute.textContent<10) {
        minute.textContent = "0" + minute.textContent;
    }
    if (second.textContent<10) {
        second.textContent = "0" + second.textContent;
    }
}