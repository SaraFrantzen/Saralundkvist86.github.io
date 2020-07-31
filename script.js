let idiotButton = document.getElementById("button");
 turnButtonRed = () => {
    idiotButton.style.backgroundColor = 'red';
    idiotButton.style.color = 'white';
    idiotButton.innerHTML = "Idiot";
}
idiotButton.onclick = turnButtonRed;