const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post }) {
      this.hasMany(Post, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
