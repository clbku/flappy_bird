
var load_state = {
    preload: function() { 
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('bird', 'assets/bird.png');
        this.game.load.image('top-pipe', 'assets/top-pipe.png');
        this.game.load.image('mid-pipe', 'assets/mid-pipe.png');
        this.game.load.audio('jump', 'assets/jump.wav');
        this.game.load.audio('collision', 'assets/collision.wav');
    },

    create: function(){
        this.game.state.start('menu');
    }
}