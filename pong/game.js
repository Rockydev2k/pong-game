// Variables for the ball
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;

// Variables for the paddle
var devx= 0.2;
var xPaddle;
var yPaddle;
var x2pad ;
var y2pad;
var paddleWidth = 25;
var paddleHeight = 100;

var started = false;
var score = 0;

function setup() {
  createCanvas(750,750);
}

function draw() {
  background(0);
  
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
    score++;
  }

  if (circRect(xBall,yBall,diameter/2,x2pad,y2pad,paddleWidth,paddleHeight)) {

    xBallChange = devx+xBallChange*(-1);
    yBallChange *= -1;
    score++;
  }



  // Draw ball
	fill(255, 0, 255);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  
  // Update paddle location
  if (!started) {
    xPaddle = 50;
    yPaddle = height/2-paddleHeight/2;
    x2pad=width-xPaddle;
    y2pad= height/2-paddleHeight/2;
    started = true;
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
  // Draw score
  fill(0, 255, 255);
  textSize(24);
	text("Score: " + score, 10, 25);
    text("Simple Pong game" , (width/2)-50, 25);
//end game..
  if (xBall<0 || xBall>width){
     score="Game Over...";
    
     started=false;
}
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

