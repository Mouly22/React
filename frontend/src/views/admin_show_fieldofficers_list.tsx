import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';

const Admin_Page_show_Field_Officers: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const deleteMember = (memberId: any) => {
    axios.post('http://127.0.0.1:8000/delete_field_officer/', { memberId })
      .then((response) => {
        if (response.data.success) {
          axios.post('http://127.0.0.1:8000/delete_all_login/', { memberId })
          window.alert('User deleted successfully.');
          // Manually refresh the data by toggling 'refresh'
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

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');
  }, []); // Load user info once

  useEffect(() => {
    if (showTable) {
      axios.get("http://127.0.0.1:8000/register_field_officer/")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [refresh, showTable]);

  const fetchData = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <Box my={3}>
        <Typography variant="h4" component="div" gutterBottom>
          Field Officers List
        </Typography>
      </Box>
      <Button onClick={fetchData} variant="contained" color="primary">
        {showTable ? 'Hide Field Officers List' : 'Show Field Officers List'}
      </Button>
      {showTable && (
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
                <TableCell>Action</TableCell>
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
                    <Button onClick={() => deleteMember(item.userid)} variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Admin_Page_show_Field_Officers;
