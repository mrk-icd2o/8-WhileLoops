# Lesson 8 - While Loops

In the last lesson we used for loops to repeat code. A while loop also repeats code, and it uses the same three parts (initial value, condition, pattern). The difference is that **we** have to put each part in the right spot.

```javascript
while (condition is true) {

}
```

That's it. This means we have to:

1. Create the initial value **before** the loop.
2. Change the value (the pattern) **inside** the loop ourselves.

```javascript
let i = initialValue;

while (condition is true) {
  // code to repeat

  // pattern
}
```

## Example

Here is the row of rectangles from last lesson, first as a for loop, then as a while loop:

```javascript
// for loop
for (let xValue = 50; xValue <= 650; xValue += 150) {
  rect(xValue, 350, 100, 100);
}

// the same thing as a while loop
let xValue = 50;

while (xValue <= 650) {
  rect(xValue, 350, 100, 100);
  xValue += 150;
}
```

Pay close attention to where everything is located:

- **The variable is created right before the loop, inside `draw()`.** Remember that `draw()` repeats. If you created `xValue` above `setup()` instead, it would still be 800 from the last time `draw()` ran, the condition would be `false`, and nothing would be drawn after the first frame.
- **The pattern (`xValue += 150`) is inside the loop**, and it must make the condition `false` at some point. If you move it outside the loop, or change it to subtraction, the condition never becomes `false`. This is an **infinite loop**, and your program will freeze.

## Why Use a While Loop?

If a while loop can do the same thing as a for loop, why have both?

- Use a **for loop** when you know (or can calculate) how many times to repeat. *Draw 10 rectangles. Go through each value in this array (later).*
- Use a **while loop** when you know when to **stop**, but not how many times that will take. *Keep going until the balance reaches $1000. Keep trying until we get a good value.*

Here are some examples where we don't know the number of repeats ahead of time.

### Example 1: How many times?

A penny doubles every day. How many days until it's worth more than $1,000,000?

```javascript
let money = 0.01;
let days = 0;

while (money <= 1000000) {
  money = money * 2;
  days += 1;
}

text(`It takes ${days} days`, 20, 40);
```

We know the goal ($1,000,000), but we don't know how many days it takes. That's the whole question! The loop finds the answer by counting.

### Example 2: Try until it works

We want to draw a circle at a random position, but **not** inside the grey box in the middle of the screen. We can't know how many random tries it will take to land outside the box, so we keep trying until we get a good one:

```javascript
let circleX = random(width);
let circleY = random(height);

// keep picking a new spot while the circle is inside the box
while (circleX > 200 && circleX < 400 && circleY > 200 && circleY < 400) {
  circleX = random(width);
  circleY = random(height);
}

circle(circleX, circleY, 30);
```

Sometimes this loop runs 0 times, sometimes 5. That is exactly when a while loop is the right choice.

### Example 3: Roll until doubles

Roll two dice until they match, and count the rolls:

```javascript
let rolls = 1;
let dieOne = floor(random(1, 7));
let dieTwo = floor(random(1, 7));

while (dieOne != dieTwo) {
  dieOne = floor(random(1, 7));
  dieTwo = floor(random(1, 7));
  rolls += 1;
}
```

## The p5.js Catch: Waiting for the User

In many other languages, a while loop is used to wait for the user:

```javascript
// DON'T DO THIS IN p5.js!
while (key != 'a') {
  // wait for the user to press 'a'
}
```

**This will freeze your program.** p5.js only updates the screen and checks for new key presses when `draw()` reaches the end. If you're stuck inside a loop, `draw()` never finishes, so the key press can never be detected and the loop never ends.

In p5.js, `draw()` **is** the loop that waits for the user. To wait for input, use an if statement inside `draw()` (or a function like `keyPressed()`):

```javascript
function draw() {
  if (key == 'a') {
    // do stuff
  }
}
```

So in p5.js, use while loops for **calculations and searches** that finish on their own, not for waiting.

| Situation | Use |
| --- | --- |
| Repeat a known number of times | for loop |
| Repeat until something happens, and the loop can make it happen | while loop |
| Wait for the user (key, mouse, button) | `draw()` with an if statement |
