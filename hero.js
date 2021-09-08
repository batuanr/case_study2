class Hero {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 275;
        this.y = 300;
        this.moveHero();
    }
    drawHero(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,20,0,2*Math.PI);
        this.ctx.fillStyle='green';
        this.ctx.fill();
    }
    moveHero(){
        document.addEventListener('keydown',(e)=>{
            switch (e.keyCode) {
                case 37: if (this.x > 40) this.x -= 25;
                break;
                case 39: if (this.x < 575) this.x += 25;
                break;
                case 38: if (this.y > 40) this.y -= 25;
                break;
                case 40: if (this.y <665) this.y += 25;
                break;
            }
        })
    }
}
let hero1 = new Hero();
