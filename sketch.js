function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("Gray");
  angleMode(DEGREES);
  // put setup code here
}

function draw() {

  push();
  stroke(color("Torquoise"));
  noFill();
  translate(width/2, height/2);
  rotate(frameCount*2);
  translate(350, 0);
  line(100, 0, 0, 300);
  pop();

  push();
  stroke(lerpColor(color("Salmon"), color("Torquoise"), frameCount/720));
  translate(745, height/2);
  rotate(frameCount*2);
  translate(100, 0);
  ellipse(0, 0, 300, 0);
  pop();


  push();
  stroke(lerpColor(color("Salmon"), color("Torquoise"), frameCount/720));
  translate(width/2, height/2);
  rotate(-frameCount*3);
  translate(-100, 0);
  ellipse(250, 200, 200, 0);
  line(0, 0, 150, 0);
  pop();


  push();
  stroke(lerpColor(color("Salmon"), color("Torquoise"), frameCount/720));
  translate(1050, height/2);
  rotate(frameCount*2);
  translate(100, 0);
  ellipse(0, 0, 300, 0);
  pop();




  // put drawing code here
}
