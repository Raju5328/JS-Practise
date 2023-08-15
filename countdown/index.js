const timeEl = document.getElementById("time");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEL = document.getElementById("secs");

const displaytime = new Date("2023-08-26");
const lastDate = displaytime.getTime();
//console.log(lastDate);
timeEl.textContent = displaytime.toDateString();

setInterval(function(){
    const newTime = new Date().getTime();
    const timeRemaining = lastDate - newTime;
    //console.log(timeRemaining);
    // const timePeriod = lastDate - timeRemaining;
    // console.log(timePeriod);


    const days = Math.floor(timeRemaining/(1000*24*60*60));
    const hours = Math.floor((timeRemaining/(1000*60*60))%24);
    const minutes = Math.floor((timeRemaining/(1000*60))%60);
    const seconds = Math.floor((timeRemaining/1000)%60);

    daysEl.textContent = days + "days";
    hoursEl.textContent = hours + "hours";
    minsEl.textContent = minutes + "minutes";
    secsEL.textContent = seconds + "seconds";
}, 1000);