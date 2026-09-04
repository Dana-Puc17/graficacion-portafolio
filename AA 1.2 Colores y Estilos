function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Cuadrado grande en el centro con transparencia
  rectMode(CENTER); 
  fill(0, 150, 255, 120); // azul translúcido
  stroke('black');
  strokeWeight(3);
  rect(width/2, height/2, 200, 200);

  // Ojos externos (blancos con borde negro)
  fill('white');
  stroke('black');
  strokeWeight(2);
  ellipse(150, 160, 40, 40);   // ojo izquierdo
  ellipse(250, 160, 40, 40);   // ojo derecho

  // Pupilas internas (negras)
  fill('black');
  noStroke();
  ellipse(150, 160, 20, 20);
  ellipse(250, 160, 20, 20);

  // Nariz naranja apuntando hacia arriba
  fill('orange');
  noStroke();
  triangle(190, 220, 210, 220, 200, 200);

  // Boca negra horizontal
  stroke('black');
  strokeWeight(3);
  line(160, 260, 240, 260);

  // Rectángulo transparente en medio de los ojos (más grande aún)
  fill(0, 255, 0, 120); // verde translúcido
  noStroke();
  rectMode(CENTER);
  rect(200, 160, 120, 60); // más ancho y alto

  // Círculo en otra parte del lienzo
  fill(255, 0, 0, 150); // rojo translúcido
  noStroke();
  ellipse(320, 320, 50, 50); // círculo en esquina inferior derecha
}
