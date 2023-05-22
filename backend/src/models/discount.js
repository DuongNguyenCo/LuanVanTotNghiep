"use strict";
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class discount extends Model {
        static associate(models) {
            discount.hasMany(models.receipt, { foreignKey: "id_receipt" });
        }
    }
    discount.init(
        {
            name: DataTypes.STRING,
            code: DataTypes.STRING(6),
            expire: DataTypes.BIGINT,
        },
        {
            sequelize,
            modelName: "discount",
        }
    );
    return discount;
};
