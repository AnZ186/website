class Firework {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.distance = Math.sqrt(Math.pow(targetX - x, 2) + Math.pow(targetY - y, 2));
    this.angle = Math.atan2(targetY - y, targetX - x);
    this.speed = 2;
    this.particles = [];
    this.alive = true;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    
    if (Math.abs(this.x - this.targetX) < 10 && Math.abs(this.y - this.targetY) < 10) {
      this.explode();
      this.alive = false;
    }
  }

  explode() {
    const particleCount = 100;
    const colors = ['#ff0000', '#ffff00', '#00ffff', '#ff00ff', '#00ff00'];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      const size = Math.random() * 3 + 1;
      const lifetime = Math.random() * 1000 + 1000;
      
      this.particles.push({
        x: this.x,
        y: this.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: size,
        color: colors[Math.floor(Math.random() * colors.length)],
        lifetime: lifetime,
        age: 0
      });
    }
  }

  updateParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // gravity
      p.age++;
      
      if (p.age >= p.lifetime) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }

  draw(ctx) {
    if (this.alive) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }

    for (const p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
  }
}

class FireworksDisplay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.fireworks = [];
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    
    // Auto-fire fireworks
    setInterval(() => this.fire(Math.random() * this.canvas.width, Math.random() * this.canvas.height), 1000);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(targetX, targetY) {
    const x = Math.random() * this.canvas.width;
    const y = this.canvas.height;
    this.fireworks.push(new Firework(x, y, targetX, targetY));
  }

  update() {
    for (let i = 0; i < this.fireworks.length; i++) {
      const fw = this.fireworks[i];
      fw.update();
      fw.updateParticles();
      
      if (!fw.alive && fw.particles.length === 0) {
        this.fireworks.splice(i, 1);
        i--;
      }
    }
  }

  draw() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (const fw of this.fireworks) {
      fw.draw(this.ctx);
    }
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(this.loop.bind(this));
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const display = new FireworksDisplay('fireworks-canvas');
  display.loop();
});