import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { title, author_id, tag_id, body, created_at, updated_at } = props.blog;

  return (
    <div className="blog-container">
      <div className="title">{title}</div>
      <div className="author_id">{author_id}</div>
      <div className="tag_id">{tag_id}</div>
      <div className="body">{body}</div>
      <div className="created_at">{created_at}</div>
      <div className="updated_at">{updated_at}</div>
    </div>
  );
};

export default Blog;
