import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import './Tweetbox.styles.css';
import { FaRegFileImage } from "react-icons/fa6";
import axios from 'axios';
import useLoggeduser from '../../Hooks/Loggeduser';

function TweetBox() {
  const [loggeduser]  = useLoggeduser();
  const [post, setPost] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    if (loggeduser && loggeduser[0]) {
      setName(loggeduser[0].name || '');
      setEmail(loggeduser[0].email || '');
      setProfileImage(loggeduser[0].profileImage || '');
    }
  }, [loggeduser]);

  const handleImageChange = (e) => {
    const imageInput = e.target.files[0];
    const formData = new FormData();
    formData.set('image', imageInput);

    axios.post("https://api.imgbb.com/1/upload?key=11df5efabaf9dab20e300a35cfb9b946", formData)
      .then(res => {
        setImage(res.data.data.display_url);
        console.log('Image URL:',res.data.data.display_url);
      });
  };

  const handleIconClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleTweet = () => {
    const userPost = {
      name: name,
      email: email,
      post: post,
      photo: image,
      profileImage: profileImage
    };

    console.log(userPost);

    fetch(`http://localhost:5000/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPost)
    })
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      });

    setPost('');
    setImage('');
  };

  return (
    <div className="tweetBox">
      <h2 className='homeborder'>Feed</h2>
      <div className="tweetBox__input">
        <div className='TwitterAvatar'>
          {loggeduser[0]?.profileImage ? (
            <img  style={{width:'15%',
               borderRadius:'1rem',
                position:'relative',
                display:'flex', 
                bottom:'3rem', }}
                src={profileImage}
                alt="Profile"/>
          ) : (
            <Avatar alt="" src="/static/images/avatar/1.jpg" />
          )}
        </div>
        <input 
          className='InputTwitter'
          value={post}
          placeholder="What's happening?" 
          type="text" 
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <div className="tweetBox__imageInput">
        <FaRegFileImage onClick={handleIconClick} style={{ cursor: 'pointer' }} />
        <input
          type="file"
          id="imageInput"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
      <button onClick={handleTweet} className="tweetBox__tweetButton">Tweet</button>
    </div>
  );
}

export default TweetBox;
