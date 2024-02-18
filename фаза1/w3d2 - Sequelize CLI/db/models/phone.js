const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Contact }) {
      this.belongsTo(Contact, { foreignKey: 'contact_id' });
    }
  }
  Phone.init({
    phone: DataTypes.STRING,
    contact_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};