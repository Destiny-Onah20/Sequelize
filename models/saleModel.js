import Sequelize from "sequelize";

import dataB from "../config/dbConfig.js";

const { DataTypes } = Sequelize;

const saleModel = dataB.define("salesTable", {
    productName: {
        type : DataTypes.STRING
    },
    productPrice: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});


export default  saleModel;