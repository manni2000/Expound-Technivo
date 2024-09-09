import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TabNavigation from './components/TabNavigation';
import StageHistory from './components/StageHistory';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <MainContent />
          <TabNavigation />
          <StageHistory />
        </div>
      </div>
    </div>
  );
};

export default App;
