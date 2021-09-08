class Game {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.score = 0;


    }
    init(){
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.hero =new Hero(this.ctx);
        this.food = new Food(this.ctx);
        this.rock1 = new Rock(this.ctx,400,650,3,4);
        this.rock2 = new Rock(this.ctx,300,30,4,-3);
        this.rock3 = new Rock(this.ctx,60,30,-2,3);
        this.rock4 = new Rock(this.ctx,100,70,-4,1.5);
        this.rock5 = new Rock(this.ctx,200,30,2,-7);
        this.rock6 = new Rock(this.ctx,10,30,5,7);
        this.maxscore = localStorage.getItem('score')


    }

    maxScore(){
        this.ctx.fillStyle='red';
        this.ctx.font='15px Arial';
        this.ctx.fillText('Max Score: '+ this.maxscore,480,20)
    }

    scoreDraw(){
        this.ctx.fillStyle='red';
        this.ctx.font='15px Arial';
        this.ctx.fillText('Score: '+ this.score,5,20)

    }
    getScore(){
      return this.score
    }

    draw(){
        this.ctx.clearRect(0,0,600,700);
        this.scoreDraw();
        this.maxScore()
        this.hero.drawHero();
        this.rock1.drawRock()
        this.food.drawFood();
        if(this.getScore()>5){
            this.rock2.drawRock();
            this.rock2.run()
        }
        if(this.getScore()>10){
            this.rock3.drawRock();
            this.rock3.run()
        }
        if(this.getScore()>19){
            this.rock4.drawRock();
            this.rock4.run()
        }
        if(this.getScore()>30){
            this.rock5.drawRock();
            this.rock5.run()
        }
        if(this.getScore()>50){
            this.rock6.drawRock();
            this.rock6.run()
        }
    }

    loop(){
        if(Math.abs(this.food.x-this.hero.x)<30 && Math.abs(this.food.y-this.hero.y)<30 ){
            this.food.setXY();
            this.score++;
            if (this.score> this.maxscore){
                localStorage.setItem('score',this.score)
                this.maxscore=this.score;
            }

        }
        // this.maxScore()
        this.draw()
        this.rock1.run();
        setTimeout(()=>this.loop(),10);
    }
}
let g = new Game();
function start() {
    g.init();
    g.loop();
}



