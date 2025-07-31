import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import ContestCard from '../components/ContestCard';

function PastContests() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/contests/past')
      .then(res => setContests(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Past Contests</Typography>
      <Grid container spacing={3}>
        {contests.length === 0 ? (
          <Grid item xs={12} textAlign="center">
            <CircularProgress />
          </Grid>
        ) : (
          contests.map((contest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ContestCard contest={contest} timer="Completed" />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default PastContests;
