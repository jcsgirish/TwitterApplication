import React from 'react'
import { BsTwitterX } from "react-icons/bs";

function IsLoading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <div style={{ fontSize: '10rem' }}>
        <BsTwitterX />
      </div>
    </div>
  );
}

export default IsLoading;
