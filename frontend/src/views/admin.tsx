import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin_Page_show_admins from './admin_show_admins';
import Admin_Page_show_Field_Officers from './admin_show_fieldofficers_list';
import Admin_Page_show_Expert from './admin_show_expert_list';
import Admin_Page_show_Incoming_request from './admin_show_incoming_request';
import SignupForm from '../Pages/SignUp';
import AddAdminsButton from './admin_show_button_for_adding_admins';
import "./admin.css"

const Admin_Page: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');
  const [activeTab, setActiveTab] = useState('admins'); // Default to admins tab

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="adminIntro">
        <h2>Welcome, Admin</h2>
        <p>User ID: {userid}</p>
        <p>User Type: {userType}</p>
        <AddAdminsButton/>
      </div>

      {/* Add tabs for navigation */}
      <div className="adminTabs">
        <button onClick={() => handleTabChange('admins')}>Admins</button>
        <button onClick={() => handleTabChange('fieldOfficers')}>Field Officers</button>
        <button onClick={() => handleTabChange('experts')}>Experts</button>
        <button onClick={() => handleTabChange('incomingRequests')}>Incoming Requests</button>
      </div>

      {/* Render content based on the active tab */}
      {activeTab === 'admins' && <Admin_Page_show_admins />}
      {activeTab === 'fieldOfficers' && <Admin_Page_show_Field_Officers />}
      {activeTab === 'experts' && <Admin_Page_show_Expert />}
      {activeTab === 'incomingRequests' && <Admin_Page_show_Incoming_request />}

      
    </div>
  );
};

export default Admin_Page;

