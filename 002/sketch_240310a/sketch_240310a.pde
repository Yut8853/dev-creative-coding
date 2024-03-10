int w, h;

void setup() {
  size(640,480);
  w = 200;
  h = 150;
  fill(255,255,0);
}

void draw() {
  rect(mouseX,mouseY,mouseX,mouseY);
}
