import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TrainsList() {
  
  const [data, setData] = useState([]);

const handleSubmit = event => {
  
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI0MjMzMTUsImNvbXBhbnlOYW1lIjoiSGVsbG8gVHJhaW5zIiwiY2xpZW50SUQiOiJkNmQyMmMwZS04OGUzLTQ0NmEtYWEyZC05Y2ZlOTI5N2U5ZDkiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiQ0IuRU4uVTRDU0UyMDQ2MSJ9.8E_37mF0rkV_ZJd4zzdVFTsyYkwr5jk_QgB_KslwHFE"; // Replace with your actual API token

    axios.get('http://20.244.56.144:80/train/trains', {
      headers: {
        'Authorization': `Bearer ${apiToken}`
      }
    })
    .then(response => {
      setData(response.data);
      console.log(data)
      
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  return (
    <>
    <button onClick = {handleSubmit}> Submit </button>
    <div className="schedule">
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Seats Available</th>
            <th>price</th>
            <th>delayed by</th>
          </tr>
        </thead>
        

         
      </table>
    </div>
    </>
  );

}

export default TrainsList;