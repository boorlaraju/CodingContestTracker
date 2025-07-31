import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField fullWidth label="Email" margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" onClick={handleLogin}>Login</Button>
    </Container>
  );
}

export default Login;
