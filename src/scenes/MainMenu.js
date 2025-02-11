class Menu extends Phaser.Scene {
  graphics;
  path;
  follower;
    constructor() {
      super("Menuscene")
    }
    preload() {
        // load images/tile sprites

this.load.image('rocket', './Assets/rocket.png')
        this.load.image('ground', './Assets/ground.png');
        this.load.spritesheet('jump', './Assets/jump.png', { frameWidth: 40, frameHeight: 36 });
        this.load.spritesheet('powerup', './Assets/powerup.png', { frameWidth: 32, frameHeight: 32 });
        this.load.audio('m', './Assets/m.wav')
        this.load.audio('sfx-select', './Assets/click.wav')
        this.load.audio('c2', './Assets/click2.wav')
        this.load.audio('c3', './Assets/click3.wav')
        this.load.audio('c4', './Assets/click4.wav')


        this.load.image('starfield', './Assets/bg.png')
        this.load.image('starfield80', './Assets/pfar.png')
        this.load.image('starfield40', './Assets/tree.png')
        this.load.image('starfield20', './Assets/foreground.png')

      }
    create() {
      const go = this.input.keyboard.on('keydown', function (event) {
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 20000    
        }
        this.sound.play('sfx-select')

        this.scene.start('t')     }, this);
      this.graphics = this.add.graphics();
      const text = 'TEMPO ';
      const startX = 500;
      const startY = 500;
      const fontSize = '50px';
      const fontFamily = 'test';
      const spacing = 55; // Adjust spacing as needed

      
      text.split('').forEach((char, index) => {
        this[`l${index + 1}`] = this.add.text(startX + (index * spacing), startY, char, {
          fontSize: fontSize,
          fontFamily: fontFamily
        }).setOrigin(0.5);
      });
      
      const text2 =  'ooooo ';
      text2.split('').forEach((char, index) => {
        this[`l${index + 7}`] = this.add.text(startX + (index * spacing), startY, char, {
          fontSize: fontSize,
          fontFamily: fontFamily
        }).setOrigin(0.5);
      });

      const text3 =  'PRESS ANY KEY TO START';
      text3.split('').forEach((char, index) => {
        this[`l${index + 13}`] = this.add.text(300+ (index * 35), game.config.height/1.2, char, {
          fontSize: 35,
          fontFamily: fontFamily
        }).setOrigin(0.5);
      });
      






      this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
      const line1 = new Phaser.Curves.Line([ 100, 100, 100, 105
       ]);
      this.path = this.add.path();
      this.path.add(line1);

      const delayIncrement = 300;
      
      for (let i = 1; i <= 7; i++) {
        this[`ball${i}`] = this.add.follower(line1, -200, game.config.height-(game.config.height/1.75), 'rocket');
        this[`ball${i}`].startFollow({
          delay: (i - 1) * delayIncrement,
          duration: 800,
          yoyo: true,
          ease: 'Sine.easeInOut',
          repeat: -1,
        });
      }


      for (let i = 7; i <= 12; i++){
        this[`ball${i}`] = this.add.follower(line1, -200, game.config.height-(game.config.height/2), 'rocket');
        this[`ball${i}`].startFollow({
          delay: (i - 7) * delayIncrement,
          duration: 800,
          yoyo: true,
          ease: 'Sine.easeInOut',
          repeat: -1,
        });
      }

      for (let i = 13; i <= 40; i++){
        this[`ball${i}`] = this.add.follower(line1, -200, game.config.height-(game.config.height/6), 'rocket');
        this[`ball${i}`].startFollow({
          delay: (i - 13) * delayIncrement,
          duration: 800,
          yoyo: true,
          ease: 'Sine.easeInOut',
          repeat: -1,
        });
      }

      




        this.anims.create({
          key: 'explode',
          frames: this.anims.generateFrameNumbers('explosion', {
              start: 0,
              end: 9,
              first: 0
          }),
          frameRate: 30
          
        })
      let menuConfig = {
        fontFamily: 'test',
        fontSize: '23px',
        backgroundColor: '#FFFFFFF',
        color: '#FFFFFF',
        align: 'right',
        padding: {
        top: 5,
        bottom: 5,
        },
        fixedWidth: 0
    }      
    // display menu text
    // this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5)
    // this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
    menuConfig.backgroundColor = '#FFFFFFF'
    menuConfig.color = '#000'
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5)
    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    KeyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    KeyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)



}

update() {
for (let i = 1; i <= 34; i++) {
  this[`l${i}`].y = this[`ball${i}`].y;
}

}


}