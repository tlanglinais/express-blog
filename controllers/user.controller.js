const User = require("../models/User.model");
const errorHandler = require("../utils/errorHandler");

// Get all users
// GET /users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.query();

        res.send(users);
    } catch (error) {
        errorHandler(error);
    }
};

// Get user by id
// GET /users/:id
exports.getUser = async (req, res) => {
    try {
        const user = await User.query().findById(req.params.id);

        if (!user) {
            res.send({ message: "No user with that id!" });
        } else res.send({ data: user });
    } catch (error) {
        errorHandler(error);
    }
};

// Create new user
// POST /users
exports.createUser = async (req, res, next) => {
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
    try {
        const user = await User.query().insert({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
        });

        res.send({ message: "User created.", data: user });
    } catch (error) {
        errorHandler(error, req, res, next);
        // res.send({ message: "A user with that email already exists!" });
    }
};

// Update specific user by id
// PUT /users/:id
exports.updateUser = async (req, res) => {
    try {
        const user = await User.query().patchAndFetchById(req.params.id, {
            ...req.body,
        });
        res.send({ message: "User updated", data: user });
    } catch (error) {
        console.log(error);
        res.send({ message: "Something went wrong" });
    }
};

// Delete specific user by id
// DELETE /users/:id
exports.deleteUser = async (req, res) => {
    // Delete user from db
    try {
        const deletedRows = await User.query().deleteById(req.params.id);
        res.send({ message: "User deleted" });
    } catch (error) {
        console.log(error);
        res.send({ message: "Something went wrong" });
    }
};
