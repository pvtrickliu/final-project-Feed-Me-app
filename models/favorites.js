module.exports = function (sequelize, DataTypes) {
    var Favorites = sequelize.define("Favorites", {
        name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        hours: {
            type: DataTypes.STRING
        }
    });

    return Favorites;
};
