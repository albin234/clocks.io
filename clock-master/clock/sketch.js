function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);


  let hr=hour();
  let mn=minute();
  let sc=second();

  // fill(255);
  // noStroke();
  // text(hr+':'+mn+':'+sc,20,200);




  strokeWeight(4);
  noFill();
  stroke(255,100,150);
  let secAngle=map(sc,0,60,0,360);
  arc(0,0,300,300,0,secAngle);


  push();
  rotate(secAngle);
  strokeWeight(4);
  stroke(255);
  line(0,0,100,0);
   pop();

  stroke(150,100,255);
  strokeWeight(6);
  let mnAngle=map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  push();
  rotate(mnAngle);
  strokeWeight(6);
  stroke(255);
  line(0,0,100,0);
   pop();

  strokeWeight(8);
  let hrAngle=map(hr%12,0,12,0,360);
  stroke(150,255,100);
  arc(0,0,250,250,0,hrAngle);

  push();
  rotate(hrAngle);
  strokeWeight(8);
  stroke(255);
  line(0,0,100,0);
   pop();




}
