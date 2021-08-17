var mangoo, Ground, food, foodgroup, health = 0, zombie, zombiegroup;
function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  mangoo = createSprite(50, windowHeight / 2 + 20, 40, 40)
  ground = createSprite(windowWidth / 2, windowHeight, windowWidth, 100)
  foodgroup = new Group();
  zombiegroup = new Group();
}

function draw() {
  background("blue");

  textSize(30);
  fill("White")
  text("Health : " + health, 10, 50)
  //string,x,y


  ground.velocityX = -3

  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  if (keyDown("left")) {
    mangoo.velocityX = -2
  }

  if (keyDown("right")) {
    mangoo.velocityX = 2
  }
  if (keyDown("up")) {
    mangoo.velocityY = -2
  }
  if (keyDown("M")) {
    Shooting()
  }
  mangoo.velocityY = mangoo.velocityY + 0.1
  mangoo.collide(ground)
  foodCreator()
  zombieCreator()
  for(var i=0;i<zombiegroup.length; i++){
    if (mangoo.isTouching(zombiegroup.get(i))){
      health-= 7
      zombiegroup.get(i).destroy();

    }
  }

  //check collision b/w food - foodGroup and mangoo to increase the health
  //for loop - initialize, condition, increment/decrement
  //.length
  for (var i = 0; i < foodgroup.length; i = i + 1) {
    if (mangoo.isTouching(foodgroup.get(i))) {
      health += 5;
      foodgroup.get(i).destroy();
    }
  }
  /*if(mangoo.isTouching(foodgroup)){
   health=health+5
   foodgroup.destroyEach()
  }*/



  drawSprites()
}
function Shooting() {

  if (frameCount % 60 === 0) {
    obj = createSprite(mangoo.x, mangoo.y, 10, 10)
    obj.velocityX = 2
  }
}

function foodCreator() {
  if (frameCount % 60 === 0) {
    // windowWidth =900
    // 900+100 = x axis to the food
    //random(starting,ending)
    food = createSprite(windowWidth + 100, 70, 10, 10)
    food.velocityX = -3;
    food.y = Math.round(random(20, windowHeight - 100))
    // lifetime = ? d/s
    food.lifetime = (windowWidth / 3) + 100
    foodgroup.add(food)
  }

}

// create a function for the zombies
function zombieCreator() {
  if (frameCount % 40 === 0) {
    // windowWidth =900
    // 900+100 = x axis to the food
    //random(starting,ending)
    zombie = createSprite(windowWidth + 100, 70, 10, 10);
    zombie.shapeColor="white"
    zombie.velocityX = -3;
    zombie.y = Math.round(random(20, windowHeight - 100))
    // lifetime = ? d/s
    zombie.lifetime = (windowWidth / 3) + 100
    zombiegroup.add(zombie)
  }

}



