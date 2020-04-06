import React from 'react';

import './index.css';

function Content({resources}) {
  const postDetails = resources.postDetails.read();
  return (
    <div className="app__main-article">
      <div className="app__article-content">
        <h1> {postDetails.title} </h1>
        <div dangerouslySetInnerHTML={{'__html' : postDetails.text}}/>
      </div>
    </div>
  );
}

export default Content;