class Play extends Phaser.Scene

{
  constructor() {
    super("playScene")
  }

      preload ()
      {

      }
  
      create ()
      {
        this.KeyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        this.loop;
        if (this.loop != 0){
        this.m = this.sound.add('m', { volume: 0.5, loop: true});
        this.m.play();
        this.loop=0
        }
        this.m.rate = 1;

        this.timer=0;
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jump', { frames: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22 ] }),
            frameRate: 64,
            repeat: -1
        });
        this.anims.create({
            frames: this.anims.generateFrameNumbers('powerup', { frames: [ 0,1,2,3,4,5,6,7] }),
            key: 'powerup',
            frameRate: 8,
            repeat: -1
        });
        this.buffer=5;
        this.enemy;
        this.enemies = [];
        this.powerups = [];
        this.controls;
        this.spawnTimer = 1900;


         this.sx = 10;
         this.accel = 0
         this.distance = 0
         this.acceltime = 0
         this.rejump;
         this.jumptimer = 0  
          const cursors = this.input.keyboard.createCursorKeys();
  
                const controlConfig = {
                    camera: this.cameras.main,
                    left: cursors.left,
                    right: cursors.right,
                    up: cursors.up,
                    down: cursors.down,
                    speed: 0.5
                };
        
                this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
        this.starfield = this.add.tileSprite(0, 0, 272, 160, 'starfield').setOrigin(0, 0).setScale(5)
        this.starfield2 = this.add.tileSprite(0, 0, 272, 160, 'starfield80').setOrigin(0, 0).setScale(5)
        // this.starfield3 = this.add.tileSprite(0, 0, 272, 160, 'starfield60').setOrigin(0, 0).setScale(5)
        this.starfield4 = this.add.tileSprite(0, 0, 272, 160, 'starfield40').setOrigin(0, 0).setScale(5)
        // this.starfield5 = this.add.tileSprite(0, 0, 272, 160, 'starfield20').setOrigin(0, 0).setScale(5)
        this.add.rectangle(0, 0, 3000, 200, 0x000000);




        this.player = this.physics.add.sprite(50, 56, 'rocket').setCollideWorldBounds(true).setOrigin(0,0)
        this.player.body.setSize(40, 36)
        this.player.setScale()
        let menuConfig = {
            fontFamily: 'test',
            fontSize: '23px',
            color: '#FFFFFF',
            align: 'right',
            backgroundColor: (255,255,255),
            fixedWidth: 0
        }
        this.text = this.add.text(500, 20, 'test',menuConfig).setScrollFactor(0).setScale(2)

        // this.text2 = this.add.text(20, 50, 'test',menuConfig).setScrollFactor(0)
        // this.text3 = this.add.text(20, 100, 'test',menuConfig).setScrollFactor(0)
        // this.player.body.setImmovable(true)

        this.spawnObject(Phaser.Math.Between(500, 600));  // Call the spawn function
        this.spawnObject(Phaser.Math.Between(500, 1280));  // Call the spawn function
        this.player.play('jump')
      }
  
      update (time, delta)
      {
        if (Phaser.Input.Keyboard.JustDown(this.KeyM)) {
          this.m.stop()
          this.loop = 10;
          this.scene.start('Menuscene')    
        }

        this.timer++
        this.player.x = 500
        if (this.player.y >  740){
            this.sound.play('c4')
            this.scene.start('playScene')        }

        this.enemies.forEach(enemy => {
            enemy.setVelocityX((-this.sx)*60) // Decrease X velocity over time

            if (enemy.x < -300) {
                const index = this.enemies.indexOf(enemy);
                if (index > -1) {
                    this.enemies.splice(index, 1);  
                }
                enemy.destroy()
            }
          });
          this.powerups.forEach(powerup => {
            powerup.setVelocityX((-this.sx)*60) // Decrease X velocity over time

            if (powerup.x < -300) {
                const index = this.powerups.indexOf(powerup);
                if (index > -1) {
                    this.powerups.splice(index, 1);  
                }
                powerup.destroy()
            }
          });
if(3000 - this.sx*70 > 50){
        if (this.spawnTimer >= 3000 - this.sx*70) { 
            this.spawnObject(Phaser.Math.Between(1880, 1280*2));  
            this.spawnObject(Phaser.Math.Between(1500, 1700));  
            this.spawnPower(Phaser.Math.Between(1500, 1700),Phaser.Math.Between(100, 400)); 
            this.m.rate += this.sx/1000
            this.spawnTimer = 0;  
          }
        } else if (this.spawnTimer >= 100){
          this.spawnObject(Phaser.Math.Between(1880, 1280*2));  
          this.spawnObject(Phaser.Math.Between(1500, 1700));  
          this.spawnPower(Phaser.Math.Between(1500, 1700),Phaser.Math.Between(100, 400)); 
          this.m.rate += this.sx/1000
          this.spawnTimer = 0;  
        }

          this.spawnTimer += delta;
          
        if(this.player.body.blocked.down){
            this.player.x = 500
            this.jumptimer =0
            this.player.setVelocityX(0);

        }
        if (game.input.activePointer.isDown){
            this.buffer = 10;
        }
        if (game.input.activePointer.leftButtonReleased()) {
            this.buffer -= 1 ;

        }
        if (game.input.activePointer.leftButtonReleased() && this.player.body.blocked.down ==false) {
            this.player.body.setGravityY(2000);
            this.jumptimer =0
        }
        if (game.input.activePointer.isDown && this.player.body.blocked.down) {
            this.jumptimer += 1; 
            this.sound.play('c2')

        }
        if ((game.input.activePointer.isDown || this.buffer>=0) && this.jumptimer > 0) {
            this.jumptimer+= delta;
            if(this.jumptimer <=400) {
                this.player.body.setGravityY(.1);
                this.player.setVelocityY(-700);
            }


        }
        // if(game.input.activePointer.upElement) {console.log("up")}
        this.text.setText(`BPM: ${(98+(this.sx/5)).toFixed(2)}`);
        // this.text3.setText(`Time: ${(this.timer/60).toFixed(2)}`);

    
        //   this.controls.update(delta);
        //  Any speed as long as 16 evenly divides by it
        this.sx += .005 
 
        this.starfield.tilePositionX += (this.sx/50)
        this.starfield2.tilePositionX += this.sx/40
        // this.starfield3.tilePositionX += this.sx/15
        this.starfield4.tilePositionX += this.sx/10
        // this.starfield5.tilePositionX += this.sx/7
        this.distance += this.sx;
        // this.cameras.main.scrollX = (this.sx).toFixed(3);
        this.cursors = this.input.keyboard.createCursorKeys();
        if (this.cursors.up.isDown && this.player.body.blocked.down)
            {
                this.player.setVelocityY(-330);
            }
      }
      spawnObject(xpos) {

        const enemy = this.physics.add.sprite(xpos, 720, 'ground').setScale(1.3);  
        enemy.setVelocityX(-100);  
        enemy.body.setAllowGravity(false).setImmovable(true).setFriction(0)
        this.enemies.push(enemy);
        this.physics.add.collider(this.player, enemy, this.hitEnemy, null, this);

      }   
      spawnPower(xpos,ypos) {

        const powerup = this.physics.add.sprite(xpos, ypos, 'powerup')  
        powerup.setVelocityX(-100);  
        powerup.body.setAllowGravity(false).setImmovable(true).setFriction(0)
        this.powerups.push(powerup);
        powerup.body.setSize(32,32)
        powerup.play('powerup')
        this.physics.add.collider(this.player, powerup, this.hitpower, null, this);



      }  
      na(){}
      hitEnemy(player, enemy) {
        if (this.player.y + this.player.height >= enemy.y) {
        this.timer = 0;
        this.sound.play('c4')
        console.log('hit');
        this.bestbpm = (100+(this.sx/5)).toFixed(2)
        this.scene.start('playScene')

        // const index = this.enemies.indexOf(enemy);
        }

      }
      hitpower(player, powerup) {
        this.sx = this.sx + 4;
        this.sound.play('c3')
        powerup.y = -100;

      }

  }
  
