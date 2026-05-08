
const GLOBAL_REGISTRY = {
  abilities: {
    vectorDash: false,
    ionicBoots: false,
    lidarPing: false,
  },
  bossesDefeated: {},
  roomsVisited: {},
  // Timestamp for future analytics or debug use
  sessionStartedAt: new Date().toISOString(),
};

const config = {
  type: Phaser.AUTO,
  parent: "game-root",
  width: 1280,
  height: 720,
  backgroundColor: "#0a0a0a",
  pixelArt: false,
  antialias: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1200 },
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [],
};

const game = new Phaser.Game(config);

// Expose for debugging in dev tools
window.__GAME__ = game;
window.__REGISTRY__ = GLOBAL_REGISTRY;
