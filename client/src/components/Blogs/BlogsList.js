import React from "react";
import BlogsListItem from "./BlogsListItem";
import "./Blogs.css";

const BlogsList = (props) => {
  const { blogs } = props;
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h2>Latest Blogs</h2>
      </div>
      <div className="blogs-list">
        <ul>
          {blogs
            ? blogs.map((blog) => <BlogsListItem key={blog.id} blog={blog} />)
            : "No blogs were found"}
        </ul>
      </div>
    </div>
  );
};

export default BlogsList;
