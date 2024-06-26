import React from 'react'
import './Profile.styles.css'
import Mainpage from './Mainpage/Mainpage'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../Firebase/Firebase'


function Profile() {
  const [user] = useAuthState(auth) 
  return (
    <div className='profile'>
      <Mainpage user={user}/>
    </div>
  )
}

export default Profile