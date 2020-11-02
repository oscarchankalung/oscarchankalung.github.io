class EvilCircle extends Circle {

  constructor() {
    super(width/2, height/2, 20, 20, 10, 'white');
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls.splice(j, 1);
        para.textContent = 'Ball count: ' + balls.length;
      }
    }
  }

  setControls() {
    window.onkeydown = (e) => {
      if (e.key === 'a') {
        this.x -= this.velX;
      } else if (e.key === 'd') {
        this.x += this.velX;
      } else if (e.key === 'w') {
        this.y -= this.velY;
      } else if (e.key === 's') {
        this.y += this.velY;
      }
    }
  }
}