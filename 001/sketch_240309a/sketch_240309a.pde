int x,y,w,h;

void setup() {
  size(640,480);
  x = 80;
  y = 60;
  w = 200;
  h = 150;
  fill(255,0,0);
}

void draw() {
  rect(mouseX, mouseY,w,h);
}
