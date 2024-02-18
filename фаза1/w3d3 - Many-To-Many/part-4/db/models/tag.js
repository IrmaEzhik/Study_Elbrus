const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Post }) {
      this.belongsToMany(Post, { through: 'PostTags', foreignKey: 'tag_id' });
    }
  }
  Tag.init({
    tag: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
