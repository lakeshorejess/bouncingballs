var ball = document.getElementById("ball");
var velocityX = 10;
var velocityY = 10;
var positionX = 0;
var positionY = 0;
var sideToSide = false;
var upAndDown = false;

function moveBall() {
  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';
  if(sideToSide === false){
    positionX += velocityX;
  } else {
    positionX -= velocityX;
  }
  if(upAndDown === false){
    positionY += velocityY;
  } else {
    positionY -= velocityY;
  }
 
  var Xmin = 0;
  var Xmax = window.innerWidth - parseInt(ball.style.width);
  var Ymin = 0;
  var Ymax = window.innerHeight - parseInt(ball.style.height);
  
  if(positionX > Xmax){
    sideToSide = true;
    ball.style.background = '#008080';
  }
  if(positionX === Xmin){
    sideToSide = false;
    ball.style.background = '#4B088A';
  }
  if(positionY > Ymax){
    upAndDown = true;
    ball.style.background = '#ADFF2F';
  }
  if(positionY === Ymin){
    upAndDown = false;
    ball.style.background = '#00FF00';
  }
}

setInterval(moveBall, 100);

var ball2 = document.getElementById("ball2");
var velocityX2 = 5;
var velocityY2 = 5;
var positionX2 = 0;
var positionY2 = 0;
var sideToSide2 = false;
var upAndDown2 = false;

function moveBall2() {
  ball2.style.left = positionX2 + 'px';
  ball2.style.top = positionY2 + 'px';
  if(sideToSide2 === false){
    positionX2 += velocityX2;
  } else {
    positionX2 -= velocityX2;
  }
  if(upAndDown2 === false){
    positionY2 += velocityY2;
  } else {
    positionY2 -= velocityY2;
  }
  
  var Xmin2 = 0;
  var Xmax2 = window.innerWidth - parseInt(ball2.style.width);
  var Ymin2 = 0;
  var Ymax2 = window.innerHeight - parseInt(ball2.style.height);
  
  if(positionX2 > Xmax2){
    sideToSide2 = true;
    ball2.style.background = '#04B486';
  }
  if(positionX2 === Xmin2){
    sideToSide2 = false;
    ball2.style.background = '#8A084B';
  }
  if(positionY2 > Ymax2){
    upAndDown2 = true;
    ball2.style.background = '#FF0000';
  }
  if(positionY2 === Ymin2){
    upAndDown2 = false;
    ball2.style.background = '#1C1C1C';
  }
}
setInterval(moveBall2, 100);

var ball3 = document.getElementById("ball3");
var velocityX3 = 15;
var velocityY3 = 15;
var positionX3 = 0;
var positionY3 = 0;
var sideToSide3 = false;
var upAndDown3 = false;

function moveBall3() {
  ball3.style.left = positionX3 + 'px';
  ball3.style.top = positionY3 + 'px';
  if(sideToSide3 === false){
    positionX3 += velocityX3;
  } else {
    positionX3 -= velocityX3;
  }
  if(upAndDown3 === false){
    positionY3 += velocityY3;
  } else {
    positionY3 -= velocityY3;
  }

  var Xmin3 = 0;
  var Xmax3 = window.innerWidth - parseInt(ball3.style.width);
  var Ymin3 = 0;
  var Ymax3 = window.innerHeight - parseInt(ball3.style.height);
  
  if(positionX3 > Xmax3){
    sideToSide3 = true;
    ball3.style.background = '#170B3B'
  }
  if(positionX3 === Xmin3){
    sideToSide3 = false;
     ball3.style.background = '#0B615E'
  }
  if(positionY3 > Ymax3){
    upAndDown3 = true;
     ball3.style.background = 'white'
  }
  if(positionY3 === Ymin3){
    upAndDown3 = false;
     ball3.style.background = '#F781BE'
  }
}
setInterval(moveBall3, 100);

var ball4 = document.getElementById("ball4");
var velocityX4 = 20;
var velocityY4 = 20;
var positionX4 = 0;
var positionY4 = 0;
var sideToSide4 = false;
var upAndDown4 = false;

function moveBall4() {
  ball4.style.left = positionX4 + 'px';
  ball4.style.top = positionY4 + 'px';
  if(sideToSide4 === false){
    positionX4 += velocityX4;
  } else {
    positionX4 -= velocityX4;
  }
  if(upAndDown4 === false){
    positionY4 += velocityY4;
  } else {
    positionY4 -= velocityY4;
  }
  
  var Xmin4 = 0;
  var Xmax4 = window.innerWidth - parseInt(ball4.style.width);
  var Ymin4 = 0;
  var Ymax4 = window.innerHeight - parseInt(ball4.style.height);
  
  if(positionX4 > Xmax4){
    sideToSide4 = true;
    ball4.style.background = '#728FCE'
  }
  if(positionX4 === Xmin4){
    sideToSide4 = false;
     ball4.style.background = '#0000A5'
  }
  if(positionY4 > Ymax4){
    upAndDown4 = true;
     ball4.style.background = '#800080'
  }
  if(positionY4 === Ymin4){
    upAndDown4 = false;
     ball4.style.background = '#E238EC'
  }
}
setInterval(moveBall4, 100);
