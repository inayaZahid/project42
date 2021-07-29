var hr,mn,sc,scAngle;
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)
}

function draw() {
  background("coral")
  fill("black")
textSize(22)

text("12",200,100)
text("6",200,318)
text("3",300,210)
text("9",100,210)
text("Made by-",500,100)
text("Inaya Zahid",500,130);
translate(200,200)

rotate(-90)
hr=hour();
mn=minute();
sc=second();

scAngle = map(sc,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr % 12,0,12,0,360)

push();
rotate(scAngle);
stroke("red");
strokeWeight(7);
line(0,0,100,0);
pop()

push();
rotate(mnAngle);
stroke("orange");
strokeWeight(7);
line(0,0,75,0);
pop()

push();
rotate(hrAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,50,0);
pop()

stroke("magenta");
point(0,0)

strokeWeight(10);
noFill();

stroke(255,0,0);
arc(0,0,300,300,0,scAngle);

stroke("orange");
arc(0,0,280,280,0,mnAngle);

stroke("yellow");
arc(0,0,260,260,0,hrAngle);

console.log(mnAngle)

  drawSprites();
}