class T extends Phaser.Scene {
  graphics;
  path;
  follower;
    constructor() {
      super("t")
    }
    create() {
      const go = this.input.keyboard.on('keydown', function (event) {
        this.sound.play('sfx-select')

        this.scene.start('playScene')     }, this);
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

    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*.5, 'Press the left mouse button to jump', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*1, 'The game is endless, the BPM and speed increase over time', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*1.5, 'When you lose, the level resets', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*2, 'The BPM tracks the speed of the track', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*2.5, 'Hit the powerups to increase your BPM, for easier gameplay, avoid them', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*3, 'Press M while in-game to go back to the main menu', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*3.5, 'Credits', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*4, 'https://freesound.org/people/Druminfected/sounds/250551/ CC-0', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*4.5, 'https://sonniss.com/gameaudiogdc royalty free', menuConfig).setOrigin(0.5)



}


}
