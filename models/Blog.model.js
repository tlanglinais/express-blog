const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Blog = db.define("blog", {
    title: {
        type: Sequelize.STRING,
    },
    author: {},
    tags: {},
    createdOn: {},
    updatedOn: {},
    body: {},
});

module.exports = Blog;
