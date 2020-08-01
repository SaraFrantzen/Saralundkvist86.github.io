let idiotButton = document.getElementById("button");
 turnButtonRed = () => {
    idiotButton.style.backgroundColor = 'red';
    idiotButton.style.color = 'white';
    idiotButton.innerHTML = "Idiot";
}
idiotButton.onclick = turnButtonRed;




let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let beachDoorPath="piccachou.jpg"; 
let botDoorPath="poop.jpg";
let spaceDoorPath="love.jpg";

let closedDoorPath="showercurtains.jpg";

let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

let isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else { (choreDoor === 2)
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

door1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src=openDoor1; 
  playDoor(door1);
  }
}
door2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src=openDoor2;
  playDoor(door2);
  }
}
door3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src=openDoor3;
  playDoor(door3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
  startRound();
  }
}

const startRound = () => {
  numClosedDoors = 3;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();