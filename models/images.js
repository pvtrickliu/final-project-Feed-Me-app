module.exports = function (sequelize, DataTypes) {
    var Images = sequelize.define("Images", {
        image_link: {
            type: DataTypes.STRING
        },
        foodType: {
            type: DataTypes.STRING
        },
        
    },
    {
        timestamps: false
    });

    return Images;
};
