const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate({ Group, Phone }) {
      this.belongsTo(Group, { foreignKey: 'group_id' });
      this.hasMany(Phone, { foreignKey: 'contact_id' });
    }
  }
  Contact.init({
    name: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};