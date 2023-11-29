import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Farmer_Page: React.FC = () => {
    const [userid, setUserid] = useState('');
    const [userType, setUserType] = useState('');
    useEffect(() => {
      const storedUserId = localStorage.getItem('userid');
      const storedUserType = localStorage.getItem('user_type');
      setUserid(storedUserId || '');
      setUserType(storedUserType || '');});
    return(
      <>
        <div>
          <h2>Welcome, Farmer</h2>
          <p>User ID: {userid}</p>
          <p>User Type: {userType}</p>
        </div>

      </>
    )
  
  
  };
  
  export default Farmer_Page;