import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-circles">
        <div className="loading-circle"></div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
