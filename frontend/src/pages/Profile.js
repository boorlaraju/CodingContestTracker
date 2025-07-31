import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // ✅ corrected import
import { Typography, Paper, Container } from '@mui/material';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // ✅ use jwtDecode correctly
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h6">Please log in to view profile.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 40 }}>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="body1"><strong>Name:</strong> {user.name}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
        <Typography variant="body1"><strong>Joined At:</strong> {new Date(user.iat * 1000).toLocaleString()}</Typography>
      </Paper>
    </Container>
  );
}

export default Profile;
