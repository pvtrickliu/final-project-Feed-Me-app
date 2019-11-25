module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    });

    Users.associate = function(models){
        Users.hasMany(models.Favorites, {
            foreignKey: 'userId',
            onDelete: 'cascade'
        });
    };
    
    return Users;
};