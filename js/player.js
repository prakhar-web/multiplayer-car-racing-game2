class Player{
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
    }
    getCount() {
        var pcref = database.ref('playerCount');
        pcref.on("value",function (data){
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount : count
        });
    }
    update() {
        var pi = "player"+this.index;
        database.ref(pi).set({
            name : this.name,
            distance : this.distance
        });
    }
    static getPlayerInfo() {
        var piref = database.ref('players');
        piref.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}