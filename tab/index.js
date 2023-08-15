const historybtn = document.getElementById("historybtn");
const visionbtn = document.getElementById("visionbtn");
const goalsbtn = document.getElementById("goalsbtn");
console.log(historybtn)

historybtn.addEventListener("click", function(){
    document.getElementById("history").style.display = "block";
    document.getElementById("vision").style.display = "none";
    document.getElementById("goals").style.display = "none";
    console.log("clicked");
})

visionbtn.addEventListener("click", function(){
    document.getElementById("history").style.display = "none";
    document.getElementById("vision").style.display = "block";
    document.getElementById("goals").style.display = "none";
})

goalsbtn.addEventListener("click", function(){
    document.getElementById("history").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById("goals").style.display = "block";
})