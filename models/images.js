module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Images", {
        image_link: {
            type: DataTypes.STRING
        },
        foodType: {
            type: DataTypes.STRING
        }
    });

    return Image;
};
