class Food {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.setXY()
    }
    setXY(){
        this.x = Math.floor(Math.random()*580) + 10;
        this.y = Math.floor(Math.random()*680) + 10;
    }
    drawFood(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,10,0,2*Math.PI);
        this.ctx.fillStyle='blue';
        this.ctx.fill();
    }
}