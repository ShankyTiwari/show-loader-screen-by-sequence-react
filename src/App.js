import React, { Suspense, SuspenseList } from "react";

import Header from './components/Header';
import HeaderLoader from './components/Header/loader';
import Sidebar from './components/Sidebar';
import SidebarLoader from './components/Sidebar/loader';
import Content from './components/Content';
import ContentLoader from './components/Content/loader';

import { fetchAppData } from './services/Api';

import './App.css';

const resources = fetchAppData();

function App() {
  return (
    <div className="app__main-container">
      <SuspenseList revealOrder="together">
        <Suspense fallback={ <HeaderLoader />} >
          <Header resources={resources} />
        </Suspense>
        <div className="app__main-content">
          <Suspense fallback={ <SidebarLoader />} >
            <Sidebar resources={resources} />
          </Suspense>
          <Suspense fallback={ <ContentLoader />} >
            <Content resources={resources} />
          </Suspense>
        </div>
      </SuspenseList>
    </div>
  );
}

export default App;
