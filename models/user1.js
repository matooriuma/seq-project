module.exports=(sequelize,DataTypes) =>{
    const User= sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
          },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNo:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        
    });
    User.associate =models =>{
        User.hasMany(models.Post, {
            onDelete:"cascade"
        });
        User.hasMany(models.Profile, {
            onDelete:"cascade"
        });
    }
  return User;
  }
  
  