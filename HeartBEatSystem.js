class HeartbeatSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new HeartParticle(this.origin));
  }

  run() {
    this.addParticle();
    for (let p of this.particles) {
      p.update();
      p.display();
    }
  }
}
