class Game{

    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
    })
}
    update(state){
        database.ref('/').update({
            gameState: state
    });
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    } 
  
    p1 = createSprite(100,200);
    p2 = createSprite(300,200);
    p3 = createSprite(500,200);
    p4 = createSprite(700,200);
    ply = [p1, p2, p3, p4];

    p1.addImage("player1",p1Img);
    p2.addImage("player2",p2Img);
    p3.addImage("player3",p3Img);
    p4.addImage("player4",p4Img);

    zombie = createSprite(ply.x + 10,ply.y + 10);
    zombie.addAnimation("zomb",zombieimg);

}


play(){
    
    form.hide();

Player.getPlayerInfo();

if(allPlayers !== undefined){
   // background('brown');
    var index = 0;

    var x = 200;
    var y;

    for(var plr in allPlayers){
        index = index + 1;

        x = x + 200;
        y = displayHeight - ply[plr].distance;
        ply[index - 1].x = x;
        ply[index - 1].y = y;

        if (index === player.index){
            stroke(10);
            fill("white")
            ellipse(x,y,100,100);
            text(player.name,x,y)
            ply[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = ply[index-1].y
          }
        }     
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
}

if(keyIsDown(DOWN_ARROW) && player.index !== null){
    player.distance -=10
    player.update();
}
    drawSprites();
}
}










   

