const Tag = require("../models/Tag.model");
const errorHandler = require("../utils/errorHandler");

// Get all tags
// GET /tags
exports.getTags = async (req, res) => {
    const tags = await Tag.query();

    res.send({ data: tags });
};

// Get tag by id
// GET /tags/:id
exports.getTag = async (req, res) => {
    const tag = await Tag.query().findById(req.params.id);

    if (!tag) {
        res.send({ message: "No tag with that id!" });
    } else res.send({ data: tag });
};

// Create new tag
// POST /tags
exports.createTag = async (req, res, next) => {
    let { name } = req.body;

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
        const tag = await Tag.query().insert({
            name: name,
        });

        res.send({ message: "Tag created.", data: tag });
    } catch (error) {
        errorHandler(error, req, res, next);
        // res.send({ message: "A user with that email already exists!" });
    }
};

// Update specific tag by id
// PUT /tag/:id
exports.updateTag = async (req, res) => {
    try {
        const tag = await Tag.query().patchAndFetchById(req.params.id, {
            ...req.body,
        });
        res.send({ message: "Tag updated", data: tag });
    } catch (error) {
        errorHandler(error);
    }
};

// Delete specific tag by id
// DELETE /tag/:id
exports.deleteTag = async (req, res) => {
    try {
        const deletedRows = await Tag.query().deleteById(req.params.id);
        res.send({ message: "Tag deleted" });
    } catch (error) {
        errorHandler(error);
    }
};
