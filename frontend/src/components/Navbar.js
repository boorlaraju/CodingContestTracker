import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Upcoming</Button>
        <Button color="inherit" component={Link} to="/past">Past</Button>
        <Button color="inherit" component={Link} to="/notify">Notify</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        {isLoggedIn ? (
          <Button color="inherit" onClick={logout}>Logout</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
