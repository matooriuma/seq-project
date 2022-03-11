'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      this.hasOne(models.User, {
        foreignKey: 'id'
      });

    }
  }
  Post.init({
    userId: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};




module.exports=(sequelize,DataTypes) =>{
  const Post= sequelize.define("Post", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
      text:{
          type:DataTypes.STRING,
          allowNull:false
      }
  });
  Post.associate = models =>{
      Post.belongsTo(models.User,{
         foreignKey:{
             allowNull:false
         }
      });  
  };
return Post;
};
