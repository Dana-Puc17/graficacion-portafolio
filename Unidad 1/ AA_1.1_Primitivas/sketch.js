function setup() {
  createCanvas(400, 400);
  background(200, 230, 255); // fondo claro
}

function draw() {
  // cabeza
  fill(220);
  stroke(0);
  strokeWeight(2);
  rect(150, 80, 100, 100, 15);

  // ojos con brillo
  fill(0);
  ellipse(175, 120, 20, 20);
  ellipse(225, 120, 20, 20);
  fill(255);
  ellipse(180, 118, 5, 5);
  ellipse(230, 118, 5, 5);

  // antena
  strokeWeight(2);
  line(200, 80, 200, 50);
  fill(255, 0, 0);
  ellipse(200, 50, 15, 15);

  // cuerpo con botones
  fill(100, 150, 255);
  rect(140, 190, 120, 140, 10);

  fill(255, 0, 0);
  ellipse(180, 230, 15, 15);
  fill(0, 255, 0);
  ellipse(220, 230, 15, 15);
  fill(255, 255, 0);
  ellipse(200, 270, 15, 15);

  // brazos
  stroke(80);
  strokeWeight(6);
  line(140, 210, 100, 260);
  line(260, 210, 300, 260);

  // manos
  fill(180);
  ellipse(100, 260, 25, 25);
  ellipse(300, 260, 25, 25);

  // piernas
  fill(180);
  rect(160, 330, 20, 40);
  rect(220, 330, 20, 40);

  // pies metálicos
  fill(120);
  rect(160, 370, 20, 15, 5);
  rect(220, 370, 20, 15, 5);
}
