import React, { useState, useEffect } from "react";
import Sidebar from "../layout/Sidebar/Sidebar";

import "./Blogs.css";

// context

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/api/blogs", { method: "GET" });
    console.log(response);
    console.log(response.data);
    setBlogs(response.data);
  };

  return (
    <div className="blogs-container">
      <Sidebar />
      {/* blogs.map(blog => {

      // < />
      } */}
    </div>
  );
};

export default Blogs;
