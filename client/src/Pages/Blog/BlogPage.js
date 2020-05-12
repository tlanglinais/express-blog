import React from "react";
const ReactMarkdown = require("react-markdown");

export const BlogPage = () => {
  return (
    <div>
      <ReactMarkdown source={body} />
    </div>
  );
};
