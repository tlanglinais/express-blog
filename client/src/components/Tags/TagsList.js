import React from "react";
import TagsListItem from "./TagsListItem";
import "./Tags.css";

const TagsList = (props) => {
  const { tags } = props;
  return (
    <div className="tags-container">
      <div className="tags-header">
        <div className="tags-header-text">
          <h3>Tags</h3>
        </div>
      </div>
      <div className="tags-list">
        <ul>
          {tags
            ? tags.map((tag) => <TagsListItem key={tag.name} tag={tag} />)
            : "No tags were found"}
        </ul>
      </div>
    </div>
  );
};

export default TagsList;
