const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Tag }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsToMany(Tag, { through: 'PostTags', foreignKey: 'post_id' });
    }
  }
  Post.init({
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
