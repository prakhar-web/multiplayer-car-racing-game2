class Game{
    constructor() {

    }
    getState() {
        var gsref = database.ref('gameState');
        gsref.on("value",function (data){
            gameState = data.val();
        });
    }
    update(state) {
        database.ref('/').update({
            gameState : state
        });
    }
   async start() {
       if(gameState === 0) {
           player = new Player();
           var pcref = await database.ref('playerCount').once("value");
           if(pcref.exists()) {
               playerCount = pcref.val();
               player.getCount();
           }
           
           form= new Form();
           form.display();
       }
   }

   play() {
       form.hide();
       text("Game Start",120,100);
       Player.getPlayerInfo();
       if(allPlayers !== undefined) {
           var dp = 132;
           for(var plr in allPlayers) {
               if(plr === "player"+player.index) {
                   fill("red");
               }
               else{
                   fill("black");
               }
               dp = dp+20;
               text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,dp);
           }
       }

       if(keyIsDown(UP_ARROW) && player.index != null) {
           player.distance = player.distance + 50;
           player.update();
       }
   }
}