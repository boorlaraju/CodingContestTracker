import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post('http://localhost:5000/api/auth/register', { email, password });
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Register</Typography>
      <TextField fullWidth label="Email" margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" onClick={handleRegister}>Register</Button>
    </Container>
  );
}

export default Register;
