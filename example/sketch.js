/*
   Description: Lesson 8 - While Loops example
   Author: Mr. Kowalczewski
   Date of last edit: October 28, 2026
*/

// values for the "random spot" and "dice" examples
// these are only re-calculated when the mouse is clicked
let circleX, circleY, tries;
let dieOne, dieTwo, rolls;

function setup() {
  createCanvas(800, 600);
  textSize(16);
  findCircleSpot();
  rollUntilDoubles();
}

function draw() {
  background(220);

  // ----- for loop vs while loop -----
  // for loop version
  // for (let xValue = 50; xValue <= 650; xValue += 150) {
  //   rect(xValue, 480, 100, 100);
  // }

  // while loop version
  // initial value goes right BEFORE the loop, inside draw()
  let xValue = 50;

  while (xValue <= 650) {
    fill(255);
    rect(xValue, 480, 100, 100);
    // pattern goes INSIDE the loop, or the loop never ends!
    xValue += 150;
  }

  // ----- Example 1: How many times? -----
  // we know the goal, but not how many days it will take
  let money = 0.01;
  let days = 0;

  while (money <= 1000000) {
    money = money * 2;
    days += 1;
  }

  fill(0);
  text(`A doubling penny passes $1,000,000 after ${days} days`, 20, 30);

  // ----- Example 2: Try until it works -----
  // the "no-go" box
  fill(150);
  rect(200, 200, 200, 200);

  fill(0, 150, 0);
  circle(circleX, circleY, 30);
  fill(0);
  text(`Random spot outside the box found after ${tries} tries`, 20, 60);

  // ----- Example 3: Roll until doubles -----
  text(`Rolled ${dieOne} and ${dieTwo} after ${rolls} rolls`, 20, 90);

  text("Click to re-run examples 2 and 3", 20, 120);
}

// picks random spots until one is outside the box
function findCircleSpot() {
  tries = 1;
  circleX = random(width);
  circleY = random(height);

  while (circleX > 200 && circleX < 400 && circleY > 200 && circleY < 400) {
    circleX = random(width);
    circleY = random(height);
    tries += 1;
  }
}

// rolls two dice until they match
function rollUntilDoubles() {
  rolls = 1;
  dieOne = floor(random(1, 7));
  dieTwo = floor(random(1, 7));

  while (dieOne != dieTwo) {
    dieOne = floor(random(1, 7));
    dieTwo = floor(random(1, 7));
    rolls += 1;
  }
}

function mousePressed() {
  findCircleSpot();
  rollUntilDoubles();
}

// ----- DON'T DO THIS -----
// this freezes the program: draw() never finishes,
// so p5.js can never detect the key press
// while (key != 'a') {
// }
