let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

const poopPath="./poop.jpg";
const goodPath1="./piccachou.jpg";
const goodPath2="./love.jpg";

doorImage1.onclick = () => {
    doorImage1.src = poopPath;
}

doorImage2.onclick = () => {
    doorImage2.src = goodPath1;
}

doorImage3.onclick = () => {
    doorImage3.src = goodPath2;
}