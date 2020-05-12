import React from "react";
import dateformat from "dateformat";
import summarize from "../../utils/Summarize";

const BlogsListItem = (props) => {
  const { title, author_id, tag_id, body, created_at, updated_at } = props.blog;

  return (
    <li>
      <div className="blog-li">
        <div className="blog-li-offset">
          <div className="blog-li-header">
            <div className="blog-li-title">{title}</div>
            <div className="blog-li-date">
              {updated_at ? (
                <span>Last Updated: {dateformat(updated_at, "isoDate")}</span>
              ) : (
                <span>
                  Date Published: ${dateformat(created_at, "isoDate")}
                </span>
              )}
            </div>
          </div>
          <div className="blog-li-body">
            <div className="blog-li-author">Written by: {author_id}</div>
            <div className="blog-li-text">{summarize(body)}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BlogsListItem;
