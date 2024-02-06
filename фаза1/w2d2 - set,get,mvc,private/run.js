const Model = require('./Model');
const View = require('./View');
const Controller = require('./Controller');

const model = new Model();
const game = new Controller(model, View);
game.run();