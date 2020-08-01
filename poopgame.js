let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let poopPath="./poop.jpg";
let goodPath1="./piccachou.jpg";
let goodPath2="./love.jpg";
let closedDoorPath="./showercurtains.jpg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

//decrease num of available doors to click, and checks gameOver
const playDoor = () => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } 
}

// to get random picture to show up behind "door"
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
        playDoor();
    }


doorImage2.onclick = () => {
        doorImage2.src = openDoor2;
        playDoor();
       }

doorImage3.onclick = () => {
        doorImage3.src = openDoor3;
        playDoor();
}
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
      }
}
randomDoorGenerator();
