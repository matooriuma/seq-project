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
  