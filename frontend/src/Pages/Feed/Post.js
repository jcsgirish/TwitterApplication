import { Avatar } from '@mui/material';
import React from 'react';
import { MdVerified } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { LuRepeat2 } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { MdPublish } from "react-icons/md";
import './Post.styles.css';

function Post({ p }) {
  const { name, email, post, photo, profileImage } = p;

  return (
    <div className='post'>
      <div className='post_avatar'>
        {profileImage ? (
          <img 
            src={profileImage}
            alt={`${name}'s profile`}
          />
        ) : (
          <Avatar alt="" src="/static/images/avatar/1.jpg" />
        )}
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            {name}{" "}
            <span className='post_verify'>
              <MdVerified className='verifiedbadge' />
              <span className='Badgeemail'> @{email.split('@')[0]}</span>
            </span>
          </div>
          <div className='headingpost'>
            <p>{post}</p>
          </div>
          <img className='imagepost' src={photo} alt='' width='350' />
          <div className='post_footer'>
            <IoChatboxOutline className='postchat' />
            <LuRepeat2 className='postrepeat' />
            <GrFavorite className='postlike' />
            <MdPublish className='postpublish' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
