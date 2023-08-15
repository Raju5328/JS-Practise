const increamentEl = document.getElementById("increament");
const resetEL = document.getElementById("reset");
const decreamentEL = document.getElementById("decreament");
const conterEl = document.getElementById("counter");
// const h2EL = document.getElementById("h2")
// console.log(h2EL);

let count = 0;
conterEl.textContent = count;

decreamentEL.addEventListener("click", function(){
    count--;
    updatecounter();
})

resetEL.addEventListener("click", function(){
    count = 0;
    updatecounter();
})

increamentEl.addEventListener("click", function(){
    count++;
    updatecounter();
})

function updatecounter(){
    conterEl.textContent = count;
    if(count < 0){      
        conterEl.style.color = "red";   
    }
    else if(count > 0){
        conterEl.style.color = "green";
    }
    else{
        conterEl.style.color = "black"; 
    }

}