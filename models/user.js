'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
        this.hasOne(models.Post, {
          foreignKey: 'id'
        });
        this.hasMany(models.Profile, {
          foreignKey: 'userId'
        });
      }
    };
  User.init({
    userId: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


