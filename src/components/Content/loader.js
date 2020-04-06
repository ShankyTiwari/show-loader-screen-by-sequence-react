import React from "react";

import './loader.css';

function ContentLoader() {
  return (
    <div className="content__loader-container">
      <div className="content__loader-firstfold">
        <div className="content__loader-image shine"></div>
        <div className="content__loader-meta">
          <div className="shine"></div>
          <div className="shine"></div>
          <div className="shine"></div>
          <div className="shine"></div>
          <div className="shine"></div>
        </div>
      </div>
      <div className="content__loader-secondfold">
        <div className="shine"></div>
        <div className="shine"></div>
        <div className="shine"></div>
      </div>
    </div>
  );
}

export default ContentLoader;
