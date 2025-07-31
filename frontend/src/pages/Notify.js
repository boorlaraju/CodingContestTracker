import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';

const Notify = () => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchNotificationStatus = async () => {
      try {
        const res = await axios.get('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEnabled(res.data.notificationsEnabled);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        setSnack({ open: true, message: 'Error loading notification status', severity: 'error' });
        setLoading(false);
      }
    };
    fetchNotificationStatus();
  }, [token]);

  const handleToggle = async () => {
    try {
      const res = await axios.put(
        '/api/user/notifications',
        { notificationsEnabled: !enabled },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEnabled(res.data.notificationsEnabled);
      setSnack({
        open: true,
        message: `Notifications ${res.data.notificationsEnabled ? 'enabled' : 'disabled'}`,
        severity: 'success',
      });
    } catch (error) {
      console.error('Failed to update notification setting:', error);
      setSnack({ open: true, message: 'Update failed', severity: 'error' });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Email Notifications
      </Typography>
      <FormControlLabel
        control={<Switch checked={enabled} onChange={handleToggle} color="primary" />}
        label={enabled ? 'Enabled' : 'Disabled'}
      />
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert onClose={() => setSnack({ ...snack, open: false })} severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Notify;
