/*
let lovePic ="./pictures/sara.jpg"

let clickedButton = document.getElementById('loveButton');
getLove = () => {
    loveButton.src= lovePic;
}
clickedButton.onclick = getLove

*/ 
let clickedButton = document.getElementById('loveButton');
 showLove= () => {
    clickedButton.style.backgroundColor = '#ffcce6';
    clickedButton.style.fontSize = '40px';
    clickedButton.style.fontFamily = 'Permanent Marker';
	clickedButton.innerHTML = "You are amazing!!";
       }
       clickedButton.onclick =  showLove;
     
