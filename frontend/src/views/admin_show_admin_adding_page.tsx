import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Paper,
} from "@mui/material";

const SignupForm_for_admin = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nid, setNid] = useState("");
  const [user_type, setUserType] = useState("admin");
  const [userExists, setUserExists] = useState(false);

  const checkUserExistence = async () => {
    try {
      let loginEndpoint = "http://127.0.0.1:8000/login_all_login/";


      const response = await axios.post(loginEndpoint, {
        userid,
      });

      if (response.data.exists) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
    } catch (error) {
      console.log("Failed to check user existence:", error);
    }
  };

  const handleSubmit = async () => {
    if (userExists) {
      alert("User already exists. Please choose a different User ID.");
      return;
    }

    if (!userid || !password || !email || !address || !nid || !user_type) {
      alert("All fields are required.");
      return;
    }

    try {
      let registerEndpoint = "http://127.0.0.1:8000/register/";
      let all_login_url = 'http://127.0.0.1:8000/register_all_login';

      await axios.post(registerEndpoint, {
        userid,
        password,
        email,
        address,
        nid,
        user_type,
      });
      alert("Signup successful!");
      await axios.post(all_login_url, {
        userid,
        password,
        email,
        address,
        nid,
        user_type,
      });
    } catch (error) {
      console.log("Failed to signup:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Typography variant="h4" align="center">
          Admin Signup
        </Typography>

        <TextField
          label="User ID"
          fullWidth
          variant="outlined"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          onBlur={checkUserExistence}
          style={{ margin: "10px 0" }}
        />
        {userExists ? (
          <Typography className="error-message">
            User already exists. Please choose a different User ID.
          </Typography>
        ) : null}
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <TextField
          label="Address"
          fullWidth
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <TextField
          label="NID"
          fullWidth
          variant="outlined"
          value={nid}
          onChange={(e) => setNid(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          style={{ margin: "10px 0", backgroundColor: "#8db596", color: "#fff" }}
        >
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
};

export default SignupForm_for_admin;
