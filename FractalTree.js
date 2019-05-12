let angle = Math.PI / 4;
let divisionFactorLeft = 0.75;
let divisionFactorRight = 0.75;
let sliderAngle, sliderTreeSizeLeft, sliderTreeSizeRight;
let toggleAngleAnimation = false, toggleAngleAnimationBtn;

let time = 0;

function setup() {
  createCanvas(800, 400);
  createP("Adjust Tree Rotation: ");
  sliderAngle = createSlider(0, TWO_PI, angle/2, 0.01);
  toggleAngleAnimationBtn = createButton("Toggle Animation Angle");
  toggleAngleAnimationBtn.mousePressed(toggleAngleAnimationFcn);

  createP("Adjust Left Tree Size: ");
  sliderTreeSizeLeft = createSlider(0, 0.9, 0.5, 0.01);
  createP("Adjust Right Tree Size: ");
  sliderTreeSizeRight = createSlider(0, 0.9, 0.5, 0.01);

}

function toggleAngleAnimationFcn(){
  toggleAngleAnimation = !toggleAngleAnimation;
}


function draw() {
  background(51);
  translate(width/2, height);


  divisionFactorLeft = sliderTreeSizeLeft.value();
  divisionFactorRight = sliderTreeSizeRight.value();

  stroke(color(200, 100, 100));
  branch(100);

  if(toggleAngleAnimation){
    angle += 0.05;
  } else{
    angle = sliderAngle.value();
  }

}

function branch(len){
  line(0, 0, 0, -len);
  if(len > 3){
    push();
    translate(0, -len);
    rotate(angle);
    branch(len*divisionFactorLeft);
    pop();
    push();
    translate(0, -len);
    rotate(-angle);
    branch(len*divisionFactorRight);
    pop();
  }
  else{
    push();
    translate(0, -len);
    fill(255, 150);
    ellipse(0, 0, 4);
    pop();
  }

}
