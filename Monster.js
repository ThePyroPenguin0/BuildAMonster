class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.S_key = null;
        this.B_key = null;
        this.A_key = null;
        this.D_key = null;
        this.W_key = null;
        this.Z_key = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>The Most Grotesque Animal<br>Press S to smile // Press B to BULK<br>A to move left // D to move right<br>W to move up // Z to move down</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        // Regular
        my.sprite.normal = {};
        my.sprite.normal.Body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redC.png");
        my.sprite.normal.LArm = this.add.sprite(this.bodyX+90, this.bodyY, "monsterParts", "arm_redB.png");
        my.sprite.normal.LArm.rotation = 5.75;
        my.sprite.normal.RArm = this.add.sprite(this.bodyX-90, this.bodyY, "monsterParts", "arm_redB.png");
        my.sprite.normal.RArm.flipX = true;
        my.sprite.normal.RArm.rotation = 0.55;
        my.sprite.normal.LLeg = this.add.sprite(this.bodyX+60, this.bodyY+120, "monsterParts", "leg_redA.png");
        my.sprite.normal.LLeg.rotation = 6.05;
        my.sprite.normal.RLeg = this.add.sprite(this.bodyX-50, this.bodyY+120, "monsterParts", "leg_redA.png");
        my.sprite.normal.RLeg.flipX = true;
        my.sprite.normal.RLeg.rotation = 0.2;
        my.sprite.normal.Mouth = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouth_closed_happy.png");
        my.sprite.normal.eye = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "eye_human.png");
        

        // Bulking
        my.sprite.bulk = {};
        my.sprite.bulk.Body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        my.sprite.bulk.LArm = this.add.sprite(this.bodyX+85, this.bodyY+50, "monsterParts", "arm_redD.png");
        my.sprite.bulk.RArm = this.add.sprite(this.bodyX-85, this.bodyY+50, "monsterParts", "arm_redD.png");
        my.sprite.bulk.RArm.flipX = true;
        my.sprite.bulk.LLeg = this.add.sprite(this.bodyX+60, this.bodyY+130, "monsterParts", "leg_redD.png");
        my.sprite.bulk.LLeg.rotation = 6.05;
        my.sprite.bulk.RLeg = this.add.sprite(this.bodyX-50, this.bodyY+130, "monsterParts", "leg_redD.png");
        my.sprite.bulk.RLeg.flipX = true;
        my.sprite.bulk.RLeg.rotation = 0.2;
        my.sprite.bulk.Mouth = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouthF.png");        
        my.sprite.bulk.eye = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "eye_cute_light.png");

        my.sprite.bulk.Body.visible = false;
        my.sprite.bulk.LArm.visible = false;
        my.sprite.bulk.RArm.visible = false;
        my.sprite.bulk.LLeg.visible = false;
        my.sprite.bulk.RLeg.visible = false;
        my.sprite.bulk.Mouth.visible = false;
        my.sprite.bulk.eye.visible = false;

        this.S_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.B_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.A_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.D_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.W_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.Z_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(this.S_key.isDown)
        {
            my.sprite.bulk.Body.visible = false;
            my.sprite.bulk.LArm.visible = false;
            my.sprite.bulk.RArm.visible = false;
            my.sprite.bulk.LLeg.visible = false;
            my.sprite.bulk.RLeg.visible = false;
            my.sprite.bulk.Mouth.visible = false;
            my.sprite.bulk.eye.visible = false;
            
            my.sprite.normal.Body.visible = true;
            my.sprite.normal.LArm.visible = true;
            my.sprite.normal.RArm.visible = true;
            my.sprite.normal.LLeg.visible = true;
            my.sprite.normal.RLeg.visible = true;
            my.sprite.normal.Mouth.visible = true;
            my.sprite.normal.eye.visible = true;
        }

        if(this.B_key.isDown)
        {
            my.sprite.bulk.Body.visible = true;
            my.sprite.bulk.LArm.visible = true;
            my.sprite.bulk.RArm.visible = true;
            my.sprite.bulk.LLeg.visible = true;
            my.sprite.bulk.RLeg.visible = true;
            my.sprite.bulk.Mouth.visible = true;
            my.sprite.bulk.eye.visible = true;
            
            my.sprite.normal.Body.visible = false;
            my.sprite.normal.LArm.visible = false;
            my.sprite.normal.RArm.visible = false;
            my.sprite.normal.LLeg.visible = false;
            my.sprite.normal.RLeg.visible = false;
            my.sprite.normal.Mouth.visible = false;
            my.sprite.normal.eye.visible = false;
        }

        if (this.A_key.isDown) {
            this.my.sprite.normal.Body.x -= 5; 
            this.my.sprite.normal.LArm.x -= 5;
            this.my.sprite.normal.RArm.x -= 5;
            this.my.sprite.normal.LLeg.x -= 5;
            this.my.sprite.normal.RLeg.x -= 5;
            this.my.sprite.normal.Mouth.x -= 5;
            this.my.sprite.normal.eye.x -= 5;

            this.my.sprite.bulk.Body.x -= 5; 
            this.my.sprite.bulk.LArm.x -= 5;
            this.my.sprite.bulk.RArm.x -= 5;
            this.my.sprite.bulk.LLeg.x -= 5;
            this.my.sprite.bulk.RLeg.x -= 5;
            this.my.sprite.bulk.Mouth.x -= 5;
            this.my.sprite.bulk.eye.x -= 5;
        }
    
        
        if (this.D_key.isDown) {
            this.my.sprite.normal.Body.x += 5; 
            this.my.sprite.normal.LArm.x += 5;
            this.my.sprite.normal.RArm.x += 5;
            this.my.sprite.normal.LLeg.x += 5;
            this.my.sprite.normal.RLeg.x += 5;
            this.my.sprite.normal.Mouth.x += 5;
            this.my.sprite.normal.eye.x += 5;

            this.my.sprite.bulk.Body.x += 5; 
            this.my.sprite.bulk.LArm.x += 5;
            this.my.sprite.bulk.RArm.x += 5;
            this.my.sprite.bulk.LLeg.x += 5;
            this.my.sprite.bulk.RLeg.x += 5;
            this.my.sprite.bulk.Mouth.x += 5;
            this.my.sprite.bulk.eye.x += 5;
        }

        if (this.W_key.isDown) {
            this.my.sprite.normal.Body.y -= 5; 
            this.my.sprite.normal.LArm.y -= 5;
            this.my.sprite.normal.RArm.y -= 5;
            this.my.sprite.normal.LLeg.y -= 5;
            this.my.sprite.normal.RLeg.y -= 5;
            this.my.sprite.normal.Mouth.y -= 5;
            this.my.sprite.normal.eye.y -= 5;

            this.my.sprite.bulk.Body.y -= 5; 
            this.my.sprite.bulk.LArm.y -= 5;
            this.my.sprite.bulk.RArm.y -= 5;
            this.my.sprite.bulk.LLeg.y -= 5;
            this.my.sprite.bulk.RLeg.y -= 5;
            this.my.sprite.bulk.Mouth.y -= 5;
            this.my.sprite.bulk.eye.y -= 5;
        }

        if (this.Z_key.isDown) {
            this.my.sprite.normal.Body.y += 5; 
            this.my.sprite.normal.LArm.y += 5;
            this.my.sprite.normal.RArm.y += 5;
            this.my.sprite.normal.LLeg.y += 5;
            this.my.sprite.normal.RLeg.y += 5;
            this.my.sprite.normal.Mouth.y += 5;
            this.my.sprite.normal.eye.y += 5;

            this.my.sprite.bulk.Body.y += 5; 
            this.my.sprite.bulk.LArm.y += 5;
            this.my.sprite.bulk.RArm.y += 5;
            this.my.sprite.bulk.LLeg.y += 5;
            this.my.sprite.bulk.RLeg.y += 5;
            this.my.sprite.bulk.Mouth.y += 5;
            this.my.sprite.bulk.eye.y += 5;
        }

    }

}