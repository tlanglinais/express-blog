import React, { useEffect, useState } from "react";
import FetchHandler from "../../utils/FetchHandler";
import Loading from "../Loading/Loading";
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    tag: null,
    body: "",
  });
  const [tags, setTags] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    setIsLoading(true);
    const response = await FetchHandler("GET", "/api/tags");

    if (response.status === 200) {
      setTags(response.data);
    } else {
      console.log("Something went wrong...");
    }
    setIsLoading(false);
  };

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    e.persist();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const results = await FetchHandler("POST", "/api/blogs");

    console.log(results);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="blog-form">
      <form>
        <div className="form-control">
          <label htmlFor="title">Blog Title</label>
          <input type="text" name="title" />
        </div>
        <div className="form-control">
          <label htmlFor="tag">Tag:</label>
          <select name="tag">
            {tags.map((tag) => (
              <option value={tag.id} key={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <MarkdownEditor />
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
