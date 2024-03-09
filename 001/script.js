class Rectangle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    draw(ctx, mouseX, mouseY) {
      ctx.fillStyle = 'red';
      ctx.fillRect(mouseX, mouseY, this.w, this.h);
    }
  }
  
  window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
  
    const myRectangle = new Rectangle(80, 60, 200, 150);
  
    canvas.addEventListener('mousemove', function(event) {
      // キャンバス上のマウス座標を計算
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      // キャンバスをクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // 新しい位置で四角形を描画
      myRectangle.draw(ctx, mouseX, mouseY);
    });
  };
  