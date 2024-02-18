const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({ Contact }) {
      this.hasMany(Contact, { foreignKey: 'group_id' });
    }
  }
  Group.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};