import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkdownEditor.css";

const MarkdownEditor = () => {
  const [text, setText] = useState();

  return (
    <div className="markdown-editor">
      <div className="markdown-text">
        <textarea
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="markdown-display">
        <ReactMarkdown source={text} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
