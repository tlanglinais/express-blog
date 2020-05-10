const users = require("./users.json");
const tags = require("./tags.json");
const blogs = require("./blogs.json");

exports.seed = function (knex) {
    // Deletes ALL data of todos
    return knex("blogs")
        .del()
        .then(() => {
            return knex("tags").del();
        })
        .then(() => {
            return knex("users").del();
        })
        .then(() => {
            return knex("users").insert(users);
        })
        .then(() => {
            return knex("tags").insert(tags);
        })
        .then(() => {
            return knex("blogs").insert(blogs);
        })
        .catch((error) => console.log(error));
};
