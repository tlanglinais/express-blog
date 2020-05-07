const User = require("./User.model");

module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tags: { type: DataTypes.STRING },
        body: { type: DataTypes.TEXT },
    });

    // Associations
    Blog.hasOne(User);
    // Blog.hasOne(User);

    return Blog;
};
