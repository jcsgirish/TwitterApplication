import React from 'react';
import { FaSearch } from "react-icons/fa";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.styles.css';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_Input'>
        <FaSearch className='searchicon' />
        <input type='text' placeholder='Search' />
      </div>
      <div className='widgets_container'>
        <h2>What’s happening</h2>
      </div>

      <div className='Tweetscontainer'>
        <div className='tweetembed'>
          <TwitterTweetEmbed tweetId={'1374617643446063105'} />
          <TwitterTweetEmbed tweetId={'933354946111705097'} />
          <TwitterTweetEmbed tweetId={'1557187138352861186'} />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
