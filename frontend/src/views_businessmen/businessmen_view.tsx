import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BusView from '../Pages/Payment/Bus_View';
import '../views/admin.css';

import { Link } from 'react-router-dom';

const Businessmen_Page: React.FC = () => {
    const [userid, setUserid] = useState('');
    const [userType, setUserType] = useState('');
    useEffect(() => {
      const storedUserId = localStorage.getItem('userid');
      const storedUserType = localStorage.getItem('user_type');
      setUserid(storedUserId || '');
      setUserType(storedUserType || '');});
    return(
      <>
        <div className='adminIntro'>
          <h2>Welcome, Businessmen</h2>
          <p><strong>User ID:</strong> {userid}</p>
          <p><strong>User Type:</strong> {userType}</p>
          <br/>
          <Link to={`/delivery_list`} className='btnn'>
                  Track Your order
          </Link>
          <br/>
          <br/>
          <h4>Congratulations on your winning bid for quality items! 🎉</h4>
          <br/>
            <BusView/>
          
        

        </div>

      </>
    )
  
  
  };
  
  export default Businessmen_Page;