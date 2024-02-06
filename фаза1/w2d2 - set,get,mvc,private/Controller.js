class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  run() {
    this.model.generateMap();
    this.model.renderPlayer();
    this.view.renderMap(this.model.map);
    this.model.moveDown();
    this.model.renderPlayer();
    this.view.renderMap(this.model.map);
  }
}

module.exports = Controller;