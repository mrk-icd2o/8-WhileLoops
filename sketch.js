/*
   Description:
   Author:
   Date of last edit:
*/

let startInput, targetInput, calcButton;

function setup() {
  createCanvas(400, 400);
  background(240);
  textSize(16);

  // set up the input boxes
  text("Starting Amount ($):", 20, 30);
  startInput = createInput('100');
  startInput.position(20, 40);

  text("Target Goal ($):", 20, 80);
  targetInput = createInput('500');
  targetInput.position(20, 90);

  calcButton = createButton('Calculate Years to Goal');
  calcButton.position(20, 130);
  calcButton.mousePressed(calculateGoal);
}

function draw() {

}

function calculateGoal() {
  // clear the bottom half of the screen for the answer
  fill(240);
  noStroke();
  rect(0, 180, width, 220);

  // get values from the text boxes and convert to numbers
  let balance = Number(startInput.value());
  let target = Number(targetInput.value());

  // use a while loop to calculate the number of years to go from 'balance' to 'target', assuming 5% interest per year

}
