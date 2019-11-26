module.exports = function (sequelize, DataTypes) {
    var Images = sequelize.define("Images", {
        image_link: {
            type: DataTypes.STRING
        },
        foodType: {
            type: DataTypes.STRING
        },
        cuisineId: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    });

    return Images;
};
