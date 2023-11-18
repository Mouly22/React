import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';

const Admin_Page_show_Incoming_request: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');
  const [data, setData] = useState([]);
  const [newMemberData, setNewMemberData] = useState({
    userid: '',
    password: '',
    email: '',
    address: '',
    nid: '',
    user_type: '',
  });
  const [refresh, setRefresh] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);

  const deleteMember = (memberId: any) => {
    axios.post('http://127.0.0.1:8000/delete_incoming_request/', { memberId })
      .then((response) => {
        if (response.data.success) {
          window.alert('User deleted successfully.');
          setRefresh(!refresh);
        } else {
          console.error('Delete request failed:', response.data);
          window.alert('User deletion failed. Please check the console for details.');
        }
      })
      .catch((error) => {
        console.error('Error deleting member:', error);
        window.alert('An error occurred while deleting the user. Please check the console for details.');
      });
  };

  let Url = '';
  let all_login_url = '';
  const addMember = (newUserData: any) => {
    all_login_url = 'http://127.0.0.1:8000/register_all_login';
    if (newUserData.user_type === 'admin') {
      Url = 'http://127.0.0.1:8000/register/';
    } else if (newUserData.user_type === 'field_officer') {
      Url = 'http://127.0.0.1:8000/register_field_officer/';
    }
    axios.post(Url, newUserData)
      .then((response) => {
        axios.post(all_login_url, newUserData)
        console.log('New member added:', response.data);
        deleteMember(newUserData.userid);
        window.alert('New member added successfully.');
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error('Error adding member:', error);
        window.alert('Error adding member. Please check the console for details.');
      });
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');

    axios.get('http://127.0.0.1:8000/register_incoming_request/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [refresh]);

  return (
    <>
      <Box my={3}>
        <Typography variant="h4" component="div" gutterBottom>
          Incoming Request
        </Typography>
        <Button variant="contained" style={{ margin: "2px 0", backgroundColor: "#8db596", color: "#fff" }} onClick={() => setTableVisible(!tableVisible)}>
          {tableVisible ? 'Hide Incoming Requests' : 'Show Incoming Requests'}
        </Button>
      </Box>
      {tableVisible && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>NID</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell>Add Member</TableCell>
                <TableCell>Delete Member</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.userid}</TableCell>
                  <TableCell>{item.password}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.nid}</TableCell>
                  <TableCell>{item.user_type}</TableCell>
                  <TableCell>
                    <Button onClick={() => addMember(item)} style={{ backgroundColor: "#8db596", color: "#fff" }}>
                      Add Member
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => deleteMember(item.userid)} style={{backgroundColor: "#8db596", color: "#fff" }}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Admin_Page_show_Incoming_request;
