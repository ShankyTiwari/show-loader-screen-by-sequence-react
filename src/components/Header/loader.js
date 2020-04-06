import React from "react";

import './loader.css';

function HeaderLoader() {
  return (
    <div className="app__header-loader">
        <div className="app__header-image shine"></div>
        <div className="app__header-meta">
            <div className="shine"></div>
            <div className="shine"></div>
        </div>

    </div>
  );
}

export default HeaderLoader;
