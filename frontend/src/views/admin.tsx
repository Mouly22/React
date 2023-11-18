import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin_Page_show_admins from './admin_show_admins';
import Admin_Page_show_Field_Officers from './admin_show_fieldofficers_list';
import Admin_Page_show_Incoming_request from './admin_show_incoming_request';
import SignupForm from '../Pages/SignUp';
import AddAdminsButton from './admin_show_button_for_adding_admins';
import "./admin.css"

const Admin_Page: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');
  });

  return (
    <div className = "admin" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <div className = "adminIntro">
        <h2>Welcome, Admin</h2>
        <p>User ID: {userid}</p>
        <p>User Type: {userType}</p>
      </div>
      
      <Admin_Page_show_admins></Admin_Page_show_admins>
      <Admin_Page_show_Field_Officers></Admin_Page_show_Field_Officers>
      <Admin_Page_show_Incoming_request></Admin_Page_show_Incoming_request>
      <AddAdminsButton></AddAdminsButton>
    </div>
  );
};

export default Admin_Page;
