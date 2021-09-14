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
  var Xmax = window.screen.availWidth;
  var Ymin = 0;
  var Ymax = window.screen.availHeight;
  if(positionX > Xmax){
    sideToSide = true;
    ball.style.background = '#F3F781';
  }
  if(positionX === Xmin){
    sideToSide = false;
    ball.style.background = '#4B088A';
  }
  if(positionY > Ymax){
    upAndDown = true;
    ball.style.background = '#F3F781'
  }
  if(positionY === Ymin){
    upAndDown = false;
    ball.style.background = '#4B088A'
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
  if(sideToSide === false){
    positionX2 += velocityX2;
  } else {
    positionX2 -= velocityX2;
  }
  if(upAndDown === false){
    positionY2 += velocityY2;
  } else {
    positionY2 -= velocityY2;
  }
  
  var Xmin2 = 0;
  var Xmax2 = window.screen.availWidth;
  var Ymin2 = 0;
  var Ymax2 = window.screen.availHeight;
  if(positionX2 > Xmax2){
    sideToSide2 = true;
    ball2.style.background = '#04B486'
  }
  if(positionX2 === Xmin2){
    sideToSide2 = false;
    ball2.style.background = '#8A084B'
  }
  if(positionY2 > Ymax2){
    upAndDown2 = true;
    ball2.style.background = '#FF0000'
  }
  if(positionY2 === Ymin2){
    upAndDown2 = false;
    ball2.style.background = '#1C1C1C'
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
  var Xmax3 = window.screen.availWidth;
  var Ymin3 = 0;
  var Ymax3 = window.screen.availHeight;
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
     ball3.style.background = '#A9F5F2'
  }
  if(positionY3 === Ymin3){
    upAndDown3 = false;
     ball3.style.background = '#F781BE'
  }
}
setInterval(moveBall3, 100);
