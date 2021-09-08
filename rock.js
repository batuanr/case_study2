class Rock {
    constructor(ctx,x, y, dx, dy,) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.run();



    }
    drawRock(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,8,0,2*Math.PI);
        this.ctx.fillStyle='red';
        this.ctx.fill();
    }
    run(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.x + this.dx > 590 || this.x + this.dx<8){
            this.dx = -this.dx;
        }if(this.y + this.dy > 690 || this.y + this.dy<8){
            this.dy = -this.dy;
        }
        this.check()

    }
    check(){
        if(Math.abs(this.x - hero1.x) < 18 && Math.abs(this.y - hero1.y) < 18){
            this.dx = 0;
            this.dy = 0
            alert("Game over");
        }
    }

}