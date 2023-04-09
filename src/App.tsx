import React from 'react';
import './scss/App.scss'
import SideBar from './components/SidebarComponents/Sidebar';
import Main from './components/MainComponents/Main';


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <SideBar/>
      <Main />
    </div>
  );
}

export default App;
