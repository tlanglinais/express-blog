import React from "react";

const TagsListItem = (props) => {
  const { tag } = props;
  // handle clicks

  return (
    <>
      {tag.count > 0 ? (
        <li>
          <div className="tag-li">
            <div className="tag-li-offset">
              <div className="tag">
                <div className="tag-name">{tag.name}</div>
                {/* <div className="tag-divider"></div> */}
                <div className="tag-count">{tag.count}</div>
              </div>
            </div>
          </div>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default TagsListItem;
