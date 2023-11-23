const startEL = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft %60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

function starttime (){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's Up1!");
            timeLeft = 1500;
            updateTimer();
        }
    },1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft =1500;
    updateTimer();
}


startEL.addEventListener("click", starttime);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);



