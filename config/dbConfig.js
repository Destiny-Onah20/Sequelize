import Sequelize from "sequelize";

const dataB = new Sequelize("salesDB", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export default dataB;