import React from "react";

import './loader.css';

function SidebarLoader() {
  return (
    <div className="app__sidebar-loader">
        <div className="sidebar__profile-image shine"></div>
        <div className="app__sidebar-meta">
            <div className="shine"></div>
            <div className="shine"></div>
        </div>
    </div>
  );
}

export default SidebarLoader;
