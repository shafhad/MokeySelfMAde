const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, bgImg;
var circle1,circle2
var monkey1, monkey2;
var finish, finishIMG;

function preload() {
    bgImg = loadImage("sprites/background.jpg");
    monkey1 = loadImage("sprites/right_swing.png");
    //finishIMG = loadImage("sprites/finish_line.png");

}

function setup() {
    createCanvas(1000, 500)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    bg = createSprite(500, 250, 1000, 500);
    bg.addImage("bg", bgImg);
    bg.x = bg.width / 2;
    bg.velocityX = -4;
    bg.scale = 3


    circle1 = new Circle(534, 127, 50, 100);
    circle2 = new Circle2(550, 350, 5, 5);
    circle3 = new Circle(575, 165, 5, 5);
    circle4 = new Circle(583, 144, 5, 5);
    circle5 = new Circle(584, 118, 5, 5);
    circle6 = new Circle(567, 97, 5, 5);
    circle7 = new Circle(547, 91, 5, 5);
    circle8 = new Circle(526, 86, 5, 5);
    circle9 = new Circle(503, 93, 5, 5);
    circle10 = new Circle(487, 109, 5, 5);
    circle11 = new Circle(486, 134, 5, 5);
    circle12 = new Circle(560, 174, 5, 5);
    circle13 = new Circle(536, 179, 5, 5);
    circle14 = new Circle(516, 173, 5, 5);
    circle15 = new Circle(496, 156, 5, 5);

    rope = new Rope(circle1.body, circle2.body);

    monkey = new Monkey(500, 400, 60, 70);

    finish = createSprite(850,250,100,100);
   // finish.addImage(finishIMG)

}

function draw() {
background(0);

    

    
    text(mouseX + "," + mouseY, mouseX, mouseY)







    //     let display = touches.length + ' touches';
    // text(display, 5, 10);

    // if((touches.length > 0 || keyDown("space"))) {
    //     rope.strokeWeight(3)
    // }

    if (keyWentDown(RIGHT_ARROW)) {
         monkey.image=loadImage("sprites/right_swing.png")
     }

     if (keyWentDown(LEFT_ARROW)) {
        monkey.image=loadImage("sprites/left_swing.png")
    }
    drawSprites();


    monkey.display();
    rope.display();
    circle1.display();
    circle4.display();
    circle3.display();
    circle2.display()
    circle5.display();
    circle6.display();
    circle7.display();
    circle8.display();
    circle9.display();
    circle10.display();
    circle11.display();
    circle12.display();
    circle13.display();
    circle14.display();
    circle15.display();


}

function keyPressed() {
    if (keyCode === 32) {
        rope.attach(monkey.body);
        monkey.body.isStatic = false
    }


}
