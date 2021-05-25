// CONSTANTS
const sponsor = document.getElementById('sponsor');
let speed = 2;
let img1, img2, img3, img4, img5;

let balls = [];
let ball;


function preload() {
    img1 = loadImage('imgs/chiesi.png');
    img2 = loadImage('imgs/fablab.png');
    img3 = loadImage('imgs/parma.png');
    img4 = loadImage('imgs/parma2.png');
    img5 = loadImage('imgs/tredipierre.png');
    img6 = loadImage('imgs/flytech.png');
    img7 = loadImage('imgs/grazie.png');
}


function setup() {
    canvas = createCanvas(sponsor.offsetWidth, sponsor.offsetHeight);
    canvas.parent("sponsor");
    sponsor.classList.add('hidden');
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img1));
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img2));
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img3));
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img4));
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img5));
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img6));
    balls.push(ball = new Ball(random(0, width-100), random(0, height-100), img7));
    fill(0);
}



function draw(){
    background(255, 255, 0);
    for(let ball of balls){
        ball.display();
        ball.move();
        ball.checkBorders();
    }



}



function windowResized() {
    resizeCanvas(sponsor.offsetWidth, sponsor.offsetHeight);
}



class Ball{
    constructor(tempX, tempY, tempImg){
        this.x = tempX;
        this.y = tempY;
        this.img = tempImg;
        this.r = 20;
        this.speedX = speed;
        this.speedY = speed;
    }


    display(){
        image(this.img, this.x, this.y);
        //stroke(0);
        //noFill();
        //rect(this.x, this.y, this.img.width, this.img.height);
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    checkBorders(){
        if (this.x > width - this.img.width) {
            this.speedX = -speed;
        }else if (this.x < 0) {
            this.speedX = speed;
        }

        if (this.y > height - this.img.height) {
            this.speedY = -speed;
        }else if (this.y < 0) {
            this.speedY = speed;
        }
    }
}

















