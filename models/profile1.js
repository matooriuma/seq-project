module.exports=(sequelize,DataTypes) =>{
    const Profile= sequelize.define("Profile",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        profileName: {
            type: DataTypes.STRING,
            allowNull: false
        }
  
    });
    Profile.associate =models =>{
        Profile.belongsTo (models.User,{
           foreignKey:{
               allowNull:false
           }
        });  
    };
  return Profile;
  };
  
  
  