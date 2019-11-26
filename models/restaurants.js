module.exports = function (sequelize, DataTypes) {
    var Restaurants = sequelize.define("Restaurants", {
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
        },
        type: {
            type: DataTypes.STRING
        },
        foodType: {
            type: DataTypes.STRING
        }
    });

    return Restaurants;
};