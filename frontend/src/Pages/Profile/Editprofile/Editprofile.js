import React, { useState } from 'react';
import './Editprofile.styles.css';
import Modal from '@mui/material/Modal';
import { Box, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600, 
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 8,
};

export default function EditProfile({ user, loggedUser }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(loggedUser && loggedUser[0] ? loggedUser[0].name : '');
  const [bio, setBio] = useState(loggedUser && loggedUser[0] ? loggedUser[0].bio : '');
  const [location, setLocation] = useState(loggedUser && loggedUser[0] ? loggedUser[0].location : '');
  const [website, setWebsite] = useState(loggedUser && loggedUser[0] ? loggedUser[0].website : '');

  const handleSave = async() => {
    const editinfo ={
      name,
      bio,
      location,
      website
    }
    if(editinfo){
      await axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, editinfo)
    setOpen(false);
  };
  }
  return (
    <div>
      <button className='edit-profile-btn' onClick={() => setOpen(true)}>Edit Profile</button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal'>
          <div className='header'>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon className='close-icon' />
            </IconButton>
            <h2 className='header-title'>Edit Profile</h2>
            <button className='save-btn' onClick={handleSave}>Save</button>
          </div>

          <form className='form-content'>
            <TextField
              className='text-field'
              fullWidth
              label='Name'
              variant='filled'
         
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
        
            <TextField
              className='text-field'
              fullWidth
              label='Bio'
              variant='filled'
           
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
        
            <TextField
              className='text-field'
              fullWidth
              label='Location'
              variant='filled'
           
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
     
            <TextField
              className='text-field'
              fullWidth
              label='Website'
              variant='filled'
              
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
