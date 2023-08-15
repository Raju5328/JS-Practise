const input_color = document.getElementById("input_color");
const buttonEl = document.getElementById("button");
const color_pallet = document.getElementById("color_pallet");

buttonEl.addEventListener("click", addcolor);

function addcolor(){
    const new_box = document.createElement("div");
    const new_color = input_color.value ;
    //console.log(new_color);
    new_box.classList.add("new_div");
    new_box.style.backgroundColor = new_color;
    color_pallet.appendChild(new_box);
    //console.log(new_box);

}