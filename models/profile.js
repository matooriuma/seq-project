'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'id'
    });
    }
  }
  Profile.init({
    userId: DataTypes.STRING,
    profilename: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};

