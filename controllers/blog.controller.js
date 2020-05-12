const Blog = require("../models/Blog.model");
const Tag = require("../models/Tag.model");
const errorHandler = require("../utils/errorHandler");
const { raw } = require("objection");

// Get all blogs
// GET /blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.query().withGraphFetched("[author, tag]");

    res.send({ data: blogs });
  } catch (error) {
    errorHandler(error);
  }
};

// Get blog by id
// GET /blogs/:id
exports.getBlog = async (req, res) => {
  const blog = await Blog.query()
    .findById(req.params.id)
    .withGraphFetched("[author, tag]");

  if (!blog) {
    res.send({ message: "No blog with that id!" });
  } else res.send({ data: blog });
};

// Create new blog
// POST /blogs
exports.createBlog = async (req, res, next) => {
  let { title, slug, author_id, tag_id, body } = req.body;

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
    const blog = await Blog.query().insert({
      title,
      slug,
      author_id,
      tag_id,
      body,
    });

    const tag = await Tag.query().patchAndFetchById(tag_id, {
      count: raw("count + 1"),
    });

    res.send({ message: "Blog created.", data: blog });
  } catch (error) {
    errorHandler(error, req, res, next);
    // res.send({ message: "A user with that email already exists!" });
  }
};

// Update specific blog by id
// PUT /blogs/:id
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.query().patchAndFetchById(req.params.id, {
      ...req.body,
    });
    res.send({ message: "Blog updated", data: blog });
  } catch (error) {
    errorHandler(error);
  }
};

// Delete specific blog by id
// DELETE /blogs/:id
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.query().findById(req.params.id);

    await blog.$query().delete();

    res.send({ message: "Blog deleted" });
    // }
  } catch (error) {
    errorHandler(error);
  }
};
