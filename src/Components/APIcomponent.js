import React, { useState } from 'react';
import axios from 'axios';

function APIcomponent() {
   



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://20.244.56.144/train/auth', {
        companyName: "Hello Trains",
        clientID: "d6d22c0e-88e3-446a-aa2d-9cfe9297e9d9",
        ownerName: "Shruti Bala",
        ownerEmail: "shrutibala2002@gmail.com",
        rollNo: "CB.EN.U4CSE20461",
        clientSecret:"gxNQPpRiWmNuFOPc", // Replace with appropriate userId
      });
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
  
    <button type="submit" onClick = {handleSubmit}>Submit</button>
 
    
  );
}

export default APIcomponent;