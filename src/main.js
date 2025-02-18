//https://sonniss.com/gameaudiogdc - audio source
//Cyra Witten
//Tempo - Genre: Endless Runner
//Estimated time - 20 hours
//https://freesound.org/people/Druminfected/sounds/250551/ cc-by 0 - audio source 2
//Creative Tilt - I liked the creative direction I went with this game, in terms of the music matching the gameplay in a very direct way.
//Usually, when I make games, or play games, the music is largley tangential to the gameplay, even in endless runners.
//I wanted to go a different way, as I view endless runners and rhythm games as very similar, in terms of skills and player exp,
//so I wanted to replicate a rhythm game exp. in the form of an endless runner.
//The rhythm heaven games greatly inspired me, and I felt I was able to capture some of the vibes of those games in an endless runner form. 
//On the technical side, I learned alot about basic platformer movement, gravity, and input buffering, all of which contributed to my final game.
//Tinkering with gravity and controls beyond a basic platfomer is something I am proud of, in terms of increasing and decreasing gravity, along with input buffering.
//https://chatgpt.com/share/6798556f-e6d4-8000-8696-8116c43f9f5b bc im lazy and didnt want to write for loops myself. Used already in Rocket Patrol mods and I copied from myself.
//Boxy-Bold ttf is an open source font. Didnt cite in game bc I doubt anyone else even cited the fontd they used. CC-0.
//https://chatgpt.com/share/67ab062b-3d18-8000-998d-2f5770753263 - basic group stuff 
let config = {
    type: Phaser.AUTO,
    width: 1340,
    height: 800,
    scene: [Menu,Play,T],
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
