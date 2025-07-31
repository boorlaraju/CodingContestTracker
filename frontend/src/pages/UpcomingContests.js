import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import ContestCard from '../components/ContestCard';

function UpcomingContests() {
  const [contests, setContests] = useState([]);
  const [timers, setTimers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/contests/upcoming')
      .then(res => setContests(res.data))
      .catch(err => console.error(err));
  }, []);

  const calculateTimeLeft = (startTime) => {
    const now = dayjs();
    const start = dayjs(startTime);
    const diff = start.diff(now, 'second');

    if (diff <= 0) return 'Started';

    const days = String(Math.floor(diff / (3600 * 24))).padStart(2, '0');
    const hours = String(Math.floor((diff % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const seconds = String(diff % 60).padStart(2, '0');
    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers = {};
      contests.forEach(contest => {
        updatedTimers[contest.url] = calculateTimeLeft(contest.start);
      });
      setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [contests]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Upcoming Contests</Typography>
      <Grid container spacing={3}>
        {contests.length === 0 ? (
          <Grid item xs={12} textAlign="center">
            <CircularProgress />
          </Grid>
        ) : (
          contests.map((contest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ContestCard contest={contest} timer={timers[contest.url]} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default UpcomingContests;
