import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import useLoggeduser from '../../../Hooks/Loggeduser';
import Avatar from '@mui/material/Avatar';
import { MdCenterFocusStrong } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import Post from '../../Feed/Post';
import './Mainpage.styles.css';
import { MdVerified } from "react-icons/md";
import axios from 'axios';
import { MdOutlineWallpaper } from "react-icons/md";
import Editprofile from '../Editprofile/Editprofile';

function Mainpage({ user }) {
  const [loggeduser] = useLoggeduser();
  const Navigate = useNavigate();
  const userName = user?.email.split('@')[0];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts only for the logged-in user
    axios.get(`http://localhost:5000/userPost?email=${user?.email}`)
      .then(res => setPosts(res.data))
      .catch(error => console.error('Error fetching user posts:', error));
  }, [user?.email]); // Ensure useEffect runs when user.email changes

  const Handlecoverimage = (e) => {
    const imageInput = e.target.files[0];
    const formData = new FormData();
    formData.set('image', imageInput);

    axios.post("https://api.imgbb.com/1/upload?key=11df5efabaf9dab20e300a35cfb9b946", formData)
    .then(res => {
      const url = res.data.data.display_url;
      const userCoverImage = { email: user?.email, coverImage: url };
      if (url) {
        axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userCoverImage)
          .catch(error => console.error('Error updating user cover image:', error));
      }
    })
    .catch(error => console.error('Error uploading image:', error));
  };

  const Handleprofileimage = (e) => {
    const imageInput = e.target.files[0];
    const formData = new FormData();
    formData.set('image', imageInput);

    axios.post("https://api.imgbb.com/1/upload?key=11df5efabaf9dab20e300a35cfb9b946", formData)
      .then(res => {
        const url = res.data.data.display_url;
 
        const userprofileImage = { email: user?.email, profileImage: url };
        axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userprofileImage)
          .catch(error => console.error('Error updating user profile image:', error));
      })
      .catch(error => console.error('Error uploading image:', error));
  };

  return (
    <div>
      <FaRegArrowAltCircleLeft className='backarrow' onClick={() => Navigate('/')} />
      <div className='headingname'>
        <h3>{loggeduser[0]?.name ? loggeduser[0]?.name : user?.displayName}<MdVerified className='vbadge' /></h3>
      </div>
      <div className='mainprofile'>
        <div className='bioprofile'>
        <div className='coverimagecontainer'>
  {loggeduser[0]?.coverImage ? (
    <img style={{ width: '110%' }} src={loggeduser[0]?.coverImage} alt="Cover" />
  ) : (
    <Avatar alt="" src="/static/images/avatar/1.jpg" />
  )}
  <div className='coverImage'>
    <label htmlFor='coverimage' className='centericon'>
      <MdCenterFocusStrong />
    </label>
    <input type='file' id='coverimage' className='imageinput' onChange={Handlecoverimage} />
  </div>
</div>

          <div className='profilesection'>
            <div className='avatar-img'>
              <div className='avatar-imgcontainer'>
                {loggeduser[0]?.profileImage ? (
                  <img style={{ width: '10%', borderRadius: '1rem', marginLeft: '3rem' }} src={loggeduser[0]?.profileImage} alt="Profile" />
                ) : (
                  <Avatar alt="" src="/static/images/avatar/1.jpg" />
                )}
              </div>
              <div className='hoveravatar'>
                <label htmlFor='profileimage' className='centerphotoicon'><MdCenterFocusStrong /></label>
                <input type='file' id='profileimage' className='imageinput' onChange={Handleprofileimage} />
              </div>
            </div>
            <Editprofile user={user} loggeduser={loggeduser} />
            <div className='userinfo'>
              <div>
                <h3 className='heading-3'>
                  {loggeduser[0]?.name ? loggeduser[0]?.name : user?.displayName}<MdVerified className='vbadge' />
                </h3>
                <p className='pheading'>@{userName}</p>
              </div>
            </div>
            <div className='infocontains'>
              <div className='locationandlink'>
                {loggeduser[0]?.bio && <p>{loggeduser[0]?.bio}</p>}
                {loggeduser[0]?.location && <p className='locationicon'><IoLocation />
                  {loggeduser[0]?.location}</p>}
                {loggeduser[0]?.website && (
                  <div className='websiteicon'><FaLink />
                    <a href={loggeduser[0]?.website} target="_blank" rel="noopener noreferrer">{loggeduser[0]?.website}</a>
                  </div>)}
              </div>
            </div>
            <h4 className='texttweets'>Tweets</h4>
          </div>
          <div className='profileposts'>
            {posts.map(p => <Post key={p._id} id={p._id} p={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
