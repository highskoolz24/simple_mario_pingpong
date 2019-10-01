function setup() {
  // set the background size of our canvas
  createCanvas(400, 400);

  // erase the background with a "grey" color
  background(255,255,200);

  // set all content drawn from this point forward
  // so that it uses "white" (0 = black, 255 = white)
  fill(255);

  // draw a rectangle at position 100,200
  // size = 50x50
  textSize(17)
  textAlign(CENTER)
  fill(0)
  text("Looking at the pyramid from above.", 200 , 50)
  fill(255,255,100)
  rect(100,100,200,200);
  rect(125,125,150,150);
  rect(150,150,100,100);
  rect(175,175,50,50);
  strokeWeight(5)
  point(200,200)

}