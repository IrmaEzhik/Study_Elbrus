//иногда модель может ничего не применять и работать как класс со статическим методом.
//Второй подход - пропсиать конструктор и работать с экземплярами

class Model {
  constructor() {
    this.skins = ['🙃', '😀', '💀'];
    this.skin = this.skins[Math.floor(Math.random() * this.skins.length)];
    this.map = [];
    this.playerX = 0;
    this.playerY = 0;
  }

  generateMap() {
    this.map = Array(4).fill([]).map(() => Array(10).fill('🌲'));
  }

  renderPlayer() {
    this.map[this.playerX][this.playerY] = this.skin;
  }

  moveDown() {
    this.playerX += 1;
  }

  moveUp() {
    this.playerX -= 1;
  }
}

module.exports = Model;