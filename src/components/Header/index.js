import React from 'react';

import './index.css';

function Header({ resources }) {
  const userDetails = resources.userDetails.read();
  return (
    <header className="app__main-header">
      <div className="app__user-profile">
        <img src={userDetails.profile_image} alt="Site Logo" />
        <div className="app__user-meta">
          <div className="app__user-name">
            {userDetails.name ? userDetails.name : '________'}
          </div>
          <div className="app__user-email">
            {userDetails.email ? userDetails.email : '_______________'}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;