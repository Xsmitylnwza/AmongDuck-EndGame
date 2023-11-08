import Phaser from "phaser";
import path from "path";
import {
  FOREGROUND_TEMPLE_PATH,
  BACKGROUND_GAME_PATH,
  BACKGROUND_TEMPLE_PATH,
  COMPONENT_GAME_PATH,
  COMPONENT_TEMPLE_PATH,
  PLATFORM_GAME_PATH,
  SPRITESHEET_GAME_PATH,
  PLAYER_SPRITESHEET_PATH,
  UI_PATH,
  TEXT_GAME_PATH,
  AUDIO_GAME_PATH,
} from "../utils/mapPath";
import { CUTSCENE_PATH } from "../utils/cutScenePath";

class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: "LoadScene",
    });
  }

  loadBackground() {
    this.load.image(
      "background",
      path.join(BACKGROUND_GAME_PATH, "background-pink.png")
    );
    this.load.image(
      "clound-layer1",
      path.join(BACKGROUND_GAME_PATH, "bg-pink-layer1.png")
    );
    this.load.image(
      "clound-layer2",
      path.join(BACKGROUND_GAME_PATH, "bg-pink-layer2.png")
    );

    //load background Temple
    this.load.image("sky", path.join(BACKGROUND_TEMPLE_PATH, "skyP01.png"));
    this.load.image("sky2", path.join(BACKGROUND_TEMPLE_PATH, "skyP02.png"));
    this.load.image("sky3", path.join(BACKGROUND_TEMPLE_PATH, "skyP03.png"));
    this.load.image(
      "bgTree",
      path.join(BACKGROUND_TEMPLE_PATH, "Background Trees.png")
    );
    this.load.image("bushes", path.join(BACKGROUND_TEMPLE_PATH, "Bushes.png"));
  }
  loadPlatforms() {
    this.load.image("platform", path.join(PLATFORM_GAME_PATH, "platform.png"));
    this.load.image(
      "platform2",
      path.join(PLATFORM_GAME_PATH, "platform2.png")
    );
    this.load.image(
      "tile-platfrom",
      path.join(PLATFORM_GAME_PATH, "tile-platform.png")
    );
    this.load.image(
      "platform-long1",
      path.join(PLATFORM_GAME_PATH, "platform-long1.png")
    );
    this.load.image(
      "platform-long2",
      path.join(PLATFORM_GAME_PATH, "platform-long2.png")
    );
    this.load.image(
      "platform-long3",
      path.join(PLATFORM_GAME_PATH, "platform-long3.png")
    );
    this.load.image(
      "platform-long4",
      path.join(PLATFORM_GAME_PATH, "platform-long4.png")
    );

    //ground
    this.load.image("ground", path.join(PLATFORM_GAME_PATH, "ground.png"));
    this.load.image(
      "ground-edge",
      path.join(PLATFORM_GAME_PATH, "ground-edge.png")
    );
    this.load.image(
      "ground-main",
      path.join(PLATFORM_GAME_PATH, "ground-main.png")
    );
    this.load.image(
      "ground-main3",
      path.join(PLATFORM_GAME_PATH, "ground-main3.png")
    );

    //clound
    this.load.image("clound", path.join(PLATFORM_GAME_PATH, "cl.png"));
    this.load.image(
      "clound-long1",
      path.join(PLATFORM_GAME_PATH, "cl-long.png")
    );
    this.load.image(
      "clound-long2",
      path.join(PLATFORM_GAME_PATH, "cl-long2.png")
    );

    //load platforms temple
    this.load.image(
      "ground-temple",
      path.join(COMPONENT_TEMPLE_PATH, "ground.png")
    );
    this.load.image(
      "groundShadow",
      path.join(COMPONENT_TEMPLE_PATH, "platformShadow.png")
    );
  }
  loadMainComponents() {
    //delivery1
    this.load.image(
      "milk-shop",
      path.join(COMPONENT_GAME_PATH, "milk-shop.png")
    );
    this.load.image("house", path.join(COMPONENT_GAME_PATH, "house.png"));
    this.load.image("milk", path.join(COMPONENT_GAME_PATH, "milk.png"));
    this.load.image("gate", path.join(COMPONENT_GAME_PATH, "gate.png"));
    this.load.image(
      "gate-active",
      path.join(COMPONENT_GAME_PATH, "gate-active.png")
    );
    this.load.sign = this.load.image(
      "sign",
      path.join(COMPONENT_GAME_PATH, "sign.png")
    );

    //delivery2
    this.load.image("house2", path.join(COMPONENT_GAME_PATH, "house2.png"));
    this.load.image("key", path.join(COMPONENT_GAME_PATH, "key.png"));
    this.load.spritesheet(
      "chest",
      path.join(SPRITESHEET_GAME_PATH, "chest.png"),
      {
        frameWidth: 143.5,
        frameHeight: 147.5,
      }
    );

    //delivery3
    this.load.image("house3", path.join(COMPONENT_GAME_PATH, "house3.png"));
    this.load.image("house4", path.join(COMPONENT_GAME_PATH, "house4.png"));
    this.load.image("ladder", path.join(COMPONENT_GAME_PATH, "ladder.png"));

    // load components temple
    this.load.image(
      "HouseTemple",
      path.join(COMPONENT_TEMPLE_PATH, "House.png")
    );
    this.load.image("torii", path.join(COMPONENT_TEMPLE_PATH, "Arc.png"));
  }
  loadComponents() {
    this.load.image(
      "sakura-tree",
      path.join(COMPONENT_GAME_PATH, "Sakura tree.png")
    );
    this.load.image(
      "small-sign",
      path.join(COMPONENT_GAME_PATH, "small-sign.png")
    );
    this.load.image(
      "statue-stone",
      path.join(COMPONENT_GAME_PATH, "statue-stone.png")
    );
    this.load.image(
      "stone-wall",
      path.join(COMPONENT_GAME_PATH, "stone-wall.png")
    );
    this.load.image("stone", path.join(COMPONENT_GAME_PATH, "stone.png"));
    this.load.image("bench", path.join(COMPONENT_GAME_PATH, "bench.png"));
    this.load.image("lantern", path.join(COMPONENT_GAME_PATH, "lantern.png"));
    this.load.image("grass", path.join(COMPONENT_GAME_PATH, "grass.png"));
    this.load.image("vine", path.join(COMPONENT_GAME_PATH, "vine.png"));

    //delivery2
    this.load.image("logs", path.join(COMPONENT_GAME_PATH, "logs.png"));
    this.load.image("log", path.join(COMPONENT_GAME_PATH, "log.png"));
    this.load.image("tree", path.join(COMPONENT_GAME_PATH, "tree.png"));
    this.load.image("box", path.join(COMPONENT_GAME_PATH, "box.png"));
    this.load.image("grass2", path.join(COMPONENT_GAME_PATH, "grass2.png"));
    this.load.image("brush", path.join(COMPONENT_GAME_PATH, "brush.png"));
    this.load.image("tou", path.join(COMPONENT_GAME_PATH, "tou.png"));

    //delivery3
    this.load.image("ladder", path.join(COMPONENT_GAME_PATH, "ladder.png"));
    this.load.image("straw1", path.join(COMPONENT_GAME_PATH, "straw1.png"));
    this.load.image("straw2", path.join(COMPONENT_GAME_PATH, "straw2.png"));

    //jumppad
    this.load.image("jumppad1", path.join(COMPONENT_GAME_PATH, "jumppad1.png"));
    this.load.image("jumppad2", path.join(COMPONENT_GAME_PATH, "jumppad2.png"));
    this.load.spritesheet(
      "jumppad",
      path.join(SPRITESHEET_GAME_PATH, "jumppad.png"),
      {
        frameWidth: 753,
        frameHeight: 753,
      }
    );

    //load components temple

    this.load.image(
      "templeText01",
      path.join(CUTSCENE_PATH, "text1_temple.png")
    );
    this.load.image(
      "templeText02",
      path.join(CUTSCENE_PATH, "text2_temple.png")
    );
    this.load.image(
      "templeText03",
      path.join(CUTSCENE_PATH, "text3_temple.png")
    );

    this.load.image("City", path.join(BACKGROUND_TEMPLE_PATH, "City.png"));
    this.load.image(
      "fuji",
      path.join(BACKGROUND_TEMPLE_PATH, "VolcanoFuji.png")
    );
    this.load.image(
      "peddlerCar",
      path.join(COMPONENT_TEMPLE_PATH, "Trading Cart.png")
    );
  }
  loadForeground() {
    this.load.spritesheet(
      "sakuraAnim",
      path.join(SPRITESHEET_GAME_PATH, "sakuraAnim.png"),
      {
        frameWidth: 888,
        frameHeight: 627,
      }
    );

    this.load.image("water", path.join(FOREGROUND_TEMPLE_PATH, "Water.png"));
    this.load.image(
      "shadow-platform",
      path.join(COMPONENT_GAME_PATH, "shadow-short.png")
    );
    this.load.image(
      "shadow-platform-long2",
      path.join(COMPONENT_GAME_PATH, "shadow-long2.png")
    );
    this.load.image(
      "shadow-platform-long1",
      path.join(COMPONENT_GAME_PATH, "shadows.png")
    );

    //load foreground temple
    // this.load.image(
    //   "tree",
    //   path.join(FOREGROUND_TEMPLE_PATH, "Sakura Tree.png")
    // );
    this.load.spritesheet(
      "water-sprite",
      path.join("assets", "anim", "water.png"),
      {
        frameWidth: 1839,
        frameHeight: 252,
      }
    );
    this.load.spritesheet(
      "sakura-sprite",
      path.join("assets", "anim", "sakura.png"),
      {
        frameWidth: 320,
        frameHeight: 320,
      }
    );
  }
  loadNpc() {
    this.load.spritesheet(
      "npc1",
      path.join(SPRITESHEET_GAME_PATH, "atok.png"),
      {
        frameWidth: 332,
        frameHeight: 516,
      }
    );

    this.load.spritesheet(
      "npc2",
      path.join(SPRITESHEET_GAME_PATH, "village_head.png"),
      {
        frameWidth: 336,
        frameHeight: 536,
      }
    );

    this.load.spritesheet(
      "npc3",
      path.join(SPRITESHEET_GAME_PATH, "uncle_fisherman.png"),
      {
        frameWidth: 332,
        frameHeight: 466,
      }
    );

    this.load.spritesheet(
      "npc4",
      path.join(SPRITESHEET_GAME_PATH, "chinese_woman.png"),
      {
        frameWidth: 312,
        frameHeight: 508,
      }
    );

    this.load.spritesheet(
      "npc5",
      path.join(SPRITESHEET_GAME_PATH, "malay_woman.png"),
      {
        frameWidth: 332,
        frameHeight: 524,
      }
    );
    this.load.spritesheet(
      "npc6",
      path.join(SPRITESHEET_GAME_PATH, "indian_woman.png"),
      {
        frameWidth: 292,
        frameHeight: 532,
      }
    );
  }
  loadMessage() {
    this.load.image(
      "message-n1",
      path.join(TEXT_GAME_PATH, "message-npc1.png")
    );
    this.load.image(
      "message-n2",
      path.join(TEXT_GAME_PATH, "message-npc2.png")
    );
    this.load.image(
      "message-n3",
      path.join(TEXT_GAME_PATH, "message-npc3.png")
    );
    this.load.image(
      "message-n4",
      path.join(TEXT_GAME_PATH, "message-npc4.png")
    );
    this.load.image(
      "message-n5",
      path.join(TEXT_GAME_PATH, "message-npc5.png")
    );
    this.load.image("thx", path.join(TEXT_GAME_PATH, "thx.png"));
    this.load.image("require1", path.join(TEXT_GAME_PATH, "require1.png"));
    this.load.image("require2", path.join(TEXT_GAME_PATH, "require2.png"));
    this.load.image("rigroll", path.join(TEXT_GAME_PATH, "rigroll.png"));
    this.load.image("msg-box", path.join(TEXT_GAME_PATH, "temple.png"));
  }
  loadPlayer() {
    this.load.spritesheet(
      "player",
      path.join(PLAYER_SPRITESHEET_PATH, "goose.png"),
      {
        frameWidth: 251,
        frameHeight: 250,
      }
    );
    this.load.spritesheet(
      "idleGoose",
      path.join(PLAYER_SPRITESHEET_PATH, "gooseIdle.png"),
      {
        frameWidth: 244,
        frameHeight: 248,
      }
    );
  }
  loadUI() {
    //load button
    this.load.image("left", path.join(UI_PATH, "left.png"));
    this.load.image("right", path.join(UI_PATH, "right.png"));
    this.load.image("up", path.join(UI_PATH, "up.png"));
    this.load.image("inBtn", path.join(UI_PATH, "inBtn.png"));
  }
  loadAudio() {
    this.load.audio("collected", path.join(AUDIO_GAME_PATH, "pickItem.mp3"));
    this.load.audio("delivered", path.join(AUDIO_GAME_PATH, "delivery.mp3"));
    this.load.audio(
      "completed",
      path.join(AUDIO_GAME_PATH, "successdelivery.mp3")
    );
    this.load.audio("drown", path.join(AUDIO_GAME_PATH, "drown.mp3"));
  }

  preload() {
    this.loadBackground();
    this.loadForeground();
    this.loadPlatforms();
    this.loadMainComponents();
    this.loadComponents();
    this.loadNpc();
    this.loadMessage();
    this.loadPlayer();
    this.loadUI();
    this.loadAudio();
  }

  addAnimation() {
    //animations for testing
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("idleGoose", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: "waterAnim",
      frames: this.anims.generateFrameNumbers("water-sprite", {
        start: 0,
        end: 5,
      }),
      frameRate: 5.5,
      repeat: -1,
    });
    this.anims.create({
      key: "sakuraAnim",
      frames: this.anims.generateFrameNumbers("sakuraAnim", {
        start: 0,
        end: 5,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "sakura",
      frames: this.anims.generateFrameNumbers("sakura-sprite", {
        start: 0,
        end: 19,
      }),
      frameRate: 8,
      repeat: -1,
    });
    // sprite sheet for npc1
    this.anims.create({
      key: "idle_npc6",
      frames: this.anims.generateFrameNumbers("npc6", {
        start: 0,
        end: 1,
      }),
      frameRate: 1,
      repeat: -1,
    });

    // sprite sheet for npc2
    this.anims.create({
      key: "idle_npc2",
      frames: this.anims.generateFrameNumbers("npc2", {
        start: 0,
        end: 1,
      }),
      frameRate: 1,
      repeat: -1,
    });
  }

  create() {
    this.add.text(20, 20, "Loading game..."); //? Text for loading page but maybe useless.
    this.addAnimation();
    //if you need to add more text before dowloading, add here
    this.scene.start("CutScene1");
  }
}
export default LoadScene;
