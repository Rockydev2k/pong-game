// Variables for the ball
var xBall =  375;
var yBall = 375;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;

// Variables for the paddle
var devx= .5;
var xPaddle;
var yPaddle;
var x2pad ;
var y2pad;
var paddleWidth = 25;
var paddleHeight = 100;

var started = false;
var score1 = 0;
var score2= 0;

let img;

function preload(){
  img = loadImage('shib.jpeg');

}
function setup() {
  createCanvas(windowWidth,750);
  img.style("z-index: 2000")
  
  
}

function draw() {
  background(0);
  image(img,1000,0);
  
  // Ball bounces off walls ball-wall collision
	xBall += xBallChange;
	yBall += yBallChange;

	if (yBall < diameter/2 || 
      yBall > height - diameter) {
    yBallChange *= -1;
	}
  
  // Detect collision with paddle


  if (circRect(xBall,yBall,diameter/2,xPaddle,yPaddle,paddleWidth,paddleHeight)) {

    xBallChange *= -1;
    yBallChange *= -1;
    score1++;
  }

  if (circRect(xBall,yBall,diameter/2,x2pad,y2pad,paddleWidth,paddleHeight)) {

    xBallChange = devx+xBallChange*(-1);
    yBallChange *= -1;
    score2++;
  }

  // Draw score
  fill(0, 255, 255);
  textSize(24);
	text("Score1: " + score1, 10, 25);
  text("Score2: " + score2, 550, 25);
  text("Simple Pong game" , 300, 25);
  
  if (yPaddle>=height || yPaddle<=0){
    yPaddle=yPaddle;
  }
  
  if (score1>5 || score2>5){
    resbalmov();
  }
  // Draw ball
	fill(255, 0, 255);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  
  // Update paddle location
  if (!started) {

    xPaddle = 50;
    yPaddle = height/2-paddleHeight/2;
    x2pad= 700;
    y2pad= height/2-paddleHeight/2;
    start();
    
  }

  // Draw paddle
  fill(0, 255, 255);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  rect(x2pad, y2pad, paddleWidth, paddleHeight);

  //keyboard input
  if (keyIsDown(UP_ARROW)) {
    y2pad -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    y2pad += 5;
  }

  // keycode .. for js.
  if (keyIsDown(87)) {
    yPaddle-= 5;
  } else if (keyIsDown(83)) {
    yPaddle+= 5;
  }
  
//end game..
  if (xBall<0 ){
    score1="You lose";
    score2=" You Win ";
    remball();
    
}
if (xBall>750){
    score2="You lose";
    score1=" You Win ";
    remball();
  }
}

function resbalmov(){
  x=xBallChange,y=yBallChange;
  for (i=0,i<=1000;i++;){
    xBallChange=0;
    yBallChange = 0;
  }
 xBallChange=x;
 yBallChange=y;
}

function remball(){
  diameter=0;
}
function start(){
  started = true;
}
// obviously not mine...
function circRect(cx, cy, rad, rx, ry, rw, rh) {
    let testX = cx;
     let testY = cy;
     
     if (cx < rx)         testX = rx;      // test left edge
     else if (cx > rx+rw) testX = rx+rw;   // right edge
     if (cy < ry)         testY = ry;      // top edge
     else if (cy > ry+rh) testY = ry+rh;   // bottom edge
     
     let d = dist(cx, cy, testX, testY);
     
       if (d <= rad) {
       return true;
     }
     return false;
   
   }

function shiba(){

}