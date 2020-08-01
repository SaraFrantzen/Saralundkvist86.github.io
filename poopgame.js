let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

const poopPath="./poop.jpg";
const goodPath1="./piccachou.jpg";
const goodPath2="./love.jpg";

const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const randomDoorGenerator = () => {
    const poopDoor = Math.floor(Math.random() * numClosedDoors);
    if (poopDoor === 0) {
        openDoor1 = poopPath;
        openDoor2 = goodPath1;
        openDoor3 = goodPath2;
    } else if (poopDoor === 1) {
        openDoor1 = goodPath1;
        openDoor2 = poopPath;
        openDoor3 = goodPath2;
    } else { (poopDoor === 2)
        openDoor1 = goodPath2;
        openDoor2 = goodPath1;
        openDoor3 = poopPath;
    }
}

doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
}

randomDoorGenerator();
