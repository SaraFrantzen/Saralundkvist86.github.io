let element = ducument.querySelector("button");
function turnButtonRed () {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.innerHTML = "Idiot";
}
element.onclick = turnButtonRed;