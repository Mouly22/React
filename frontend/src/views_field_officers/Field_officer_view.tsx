import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Field_officer_Page: React.FC = () => {
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
          <h2>Welcome, Field Officer</h2>
          <p>User ID: {userid}</p>
          <p>User Type: {userType}</p>
        </div>

      </>
    )
  
  
  };
  
  export default Field_officer_Page;