const Sequelize = require("sequelize");

// module.exports = new Sequelize(
//     process.env.DB,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: "mysql",
//     }
// );
module.exports = new Sequelize("testdb", "dbUser", "2RBSlah", {
    host: "localhost",
    dialect: "mysql",
});
