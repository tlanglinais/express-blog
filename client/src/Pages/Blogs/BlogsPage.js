import React, { useState, useEffect } from "react";
import BlogsList from "../../components/Blogs/BlogsList";
import TagsList from "../../components/Tags/TagsList";
import Loading from "../../components/Loading/Loading";
import FetchHandler from "../../utils/FetchHandler";

import "./BlogsPage.css";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState();
  const [tags, setTags] = useState();
  const [selectedTag, setSelectedTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(setBlogs, "GET", "/api/blogs");
    fetchData(setTags, "GET", "/api/tags");
  }, []);

  const fetchData = async (setter, method, url, options) => {
    setIsLoading(true);
    const response = await FetchHandler(method, url);

    if (response.status === 200) {
      setter(response.data);
      setIsLoading(false);
    } else {
      console.log("Something went wrong...");
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="blogs-page-container">
          <TagsList tags={tags} />
          <BlogsList blogs={blogs} />
        </div>
      )}
    </>
  );
};

export default BlogsPage;
