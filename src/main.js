let config = {
    type: Phaser.AUTO,
    width: 1340,
    height: 800,
    scene: [Menu,Play],
    physics: {
      default: 'arcade',
      
      arcade: {
          gravity: { y: 2000 },
          
      }
  },
    
  }

let game = new Phaser.Game(config)
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT, KeyUP, KeyDOWN, keyW, keyS, keyA, keyD