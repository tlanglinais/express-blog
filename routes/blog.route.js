const express = require("express");
const router = express.Router();
const {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
} = require("../controllers/blog.controller");

//   const { protect } = require("../middleware/auth");
// router.use(protect);

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

module.exports = router;
