import React, { useEffect, useState } from 'react';
import '../Page.css';
import TweetBox from './TweetBox';
import './Feed.styles.css';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, [posts]);

  return (
    <div className='Feed'>
      <div className='FeedHeader'>
        <div className='feedborder'>
          <TweetBox />
        </div>
      </div>
      <div className='FeedPosts'>
        {posts.map(p => <Post key={p._id} p={p} />)}
      </div>
    </div>
  );
}

export default Feed;
