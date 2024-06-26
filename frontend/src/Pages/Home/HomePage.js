import React from 'react';
import './HomePage.styles.css';
import SideBar from '../SideBar/SideBar';
import Widgets from '../Widgets/Widgets';
import { Outlet } from 'react-router-dom';



const Homepage = () => {
  return (
    <div className='App'>
      <SideBar/>
      <Outlet/>
      <Widgets/>
    </div>

      
  );
}

export default Homepage;
