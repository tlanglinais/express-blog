const db = require("../config/db");
const User = require("../models/User.model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Associations
User.hasMany(Blog, { as: "blogs", foreignKey: "id" });
Blog.hasOne(User);

// Get user by id
// GET /users/:id
exports.getUser = (req, res) => {
    User.findOne({ where: { id: req.params.id } })
        .then((user) => {
            console.log(user);
            if (!user) res.send({ message: "No user with that id!" });
            else res.send(user);
        })
        .catch((err) => res.send({ message: "Error", err }));
};

// Get all users
// GET /users
exports.getUsers = (req, res) => {
    User.findAll().then((users) => {
        res.send({ users });
    });
};

// Create new user
// POST /users
exports.createUser = (req, res) => {
    console.log(req.body);
    let { first_name, last_name, email, password } = req.body;

    // // Validate fields
    // let errors = [];
    // if (!title) errors.push({ text: "Please add a title" });
    // if (!technologies) errors.push({ text: "Please some technologies" });
    // if (!description) errors.push({ text: "Please add a description" });
    // if (!contact_email) errors.push({ text: "Please add a contact email" });

    // Check for errors
    // if (errors.length > 0) {

    // Insert into db
    User.create({ first_name, last_name, email, password })
        .then((user) =>
            res.send({ message: "User created successfully.", user })
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err });
        });
};

// Update specific user by id
// PUT /users/:id
exports.updateUser = (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
        .then((user) => {
            res.send({ message: "User updated" });
        })
        .catch((err) => res.send({ message: "Error", err }));
};

// Delete specific user by id
// DELETE /users/:id
exports.deleteUser = (req, res) => {
    // Delete user from db
    User.destroy({ first_name, last_name, email, password })
        .then((user) => res.send({ message: "User deleted." }))
        .catch((err) => console.log(err));
};
