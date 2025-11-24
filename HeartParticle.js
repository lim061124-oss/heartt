class HeartParticle {
  constructor(position) {
    this.position = position.copy();
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.lifespan = 255;
  }

  update() {
    this.position.add(this.velocity);
    this.lifespan -= 3;
  }

  display() {
    noStroke();
    fill(255, 0, 0, this.lifespan);
    ellipse(this.position.x, this.position.y, 16);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}
