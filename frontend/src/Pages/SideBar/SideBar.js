import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SlHome } from 'react-icons/sl';
import { IoSearchOutline, IoNotificationsOutline, IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { TiMessages } from 'react-icons/ti';
import { MdPersonOutline } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';
import Avatar from '@mui/material/Avatar';
import { VscBookmark } from 'react-icons/vsc';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase';
import './SideBar.styles.css';
import useLoggeduser from '../../Hooks/Loggeduser';


function SideBar() {  
const navigate = useNavigate();
const [menu, setMenu] = useState(false);
const [loggeduser] = useLoggeduser()

const [user] = useAuthState(auth)
  const toggleMenu = () => {
    setMenu(!menu);
  }

  const handleExistingAccount = () => {
    navigate('/signup');
  }

 
  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  }

  const result = user?.email.split('@')[0]
  
  return (
    <div className='sidebar-container'>
      <div className='sidebar'>
        <BsTwitterX className='icon' />

        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <SlHome className='options' />
            <Link className='link' to='/home/feed'><h2 className='optionname'>Home</h2></Link>
          </div>
        </div>
        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <IoSearchOutline className='options' />
            <Link className='link' to='/home/explore'><h2 className='optionname'>Explore</h2></Link>
          </div>
        </div>
        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <IoNotificationsOutline className='options' />
            <Link className='link' to='/home/notifications'><h2 className='optionname'>Notifications</h2></Link>
          </div>
        </div>

        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <TiMessages className='options' />
            <Link className='link' to='/home/messages'><h2 className='optionname'>Messages</h2></Link>
          </div>
        </div>

        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <VscBookmark className='options' />
            <Link className='link' to='/home/bookmarks'><h2 className='optionname'>Bookmarks</h2></Link>
          </div>
        </div>

        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <MdPersonOutline className='options' />
            <Link className='link' to='/home/profile'><h2 className='optionname'>Profile</h2></Link>
          </div>
        </div>

        <div className='sidebaroptions'>
          <div className='sidebaroptions_container'>
            <CiCircleMore className='options' />
            <Link className='link' to='/home/more'><h2 className='optionname'>More</h2></Link>
          </div>
        </div>
        <div className='ProfileContainer'>
          <div className='ProfileAvatar'>
          {loggeduser[0]?.profileImage ? (
              <img src={loggeduser[0]?.profileImage} alt="Profile"/>
            ) : (
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            )}
          </div>
          <div className='UserInfo'>
        <h3 className='info1'>{loggeduser[0]?.name ? loggeduser[0]?.name : user && user?.displayName}</h3>
            <h4 className='info2'>@{result}</h4>
  

          </div>
          <div className='HorizontalIcon' onClick={toggleMenu}>
            <IoEllipsisHorizontalSharp />
          </div>
        </div>
        
        {menu && (
          <div className='Menu'>
            <div className='MenuItem' onClick={handleExistingAccount}>Add an existing account</div>
            <div className='MenuItem' onClick={handleLogout}>Log out @{result}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
