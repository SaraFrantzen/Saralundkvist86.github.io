let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let poopPath="./pictures/gamePictures/poop.jpg";
let goodPath1="./pictures/gamePictures/piccachou.jpg";
let goodPath2="./pictures/gamePictures/love.jpg";
let closedDoorPath="./pictures/gamePictures/showercurtains.jpg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

//determine if poop is found
/* old code
const isPoop = (door) => {
    if (door.src === poopPath) {
      return true;
    } else {
      return false;
    }
  };
  */
 //determina if poop is found with regex (from coach Thomas)
 const isPoop = (door) => {
    if (door.src.includes(poopPath.replace(/^.*[\\\/]/, '')) ) {
      return true;
    } else {
      return false;
    }
  };

//decrease num of available doors to click, and checks gameOver
const playDoor = (door) => {
    numClosedDoors--;
    if (isPoop(door)) {
    gameOver('lose');
  }  else if (numClosedDoors === 0) {
    gameOver('win');
} 
};

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
};

door1.onclick = () => {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
}   


door2.onclick = () => {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
}    

door3.onclick = () => {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
}
const gameOver = (status) => {
    if (status === 'lose') {
        startButton.innerHTML = 'Game over! Play again?';
      } else { 
        startButton.innerHTML = 'You win! Play again?';
      }
};

randomDoorGenerator();
