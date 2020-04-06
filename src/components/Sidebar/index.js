import React from "react";
import './index.css';

function Sidebar({ resources }) {
  const authors = resources.authors.read();
  return (
    <div className="app__main-sidebar">
      <div className="app__section-meta">Your favorite Authors</div>
      <div className="app__section-user">
        { authors.map( (user, id) => (            
          <div key={id} className="app__user-detail">
            <img src={user.profile_image} alt="Site Logo" />
            <div className="app__user-meta">
              <div className="app__user-name">
                {user.name}
              </div>
              <div className="app__user-status">
                {user.status}
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;