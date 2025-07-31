import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
import axios from 'axios';
import ContestList from '../components/ContestList';

const ContestsPage = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/contests/upcoming')
      .then(res => setContests(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Upcoming Coding Contests
      </Typography>
      <ContestList contests={contests} />
    </Container>
  );
};

export default ContestsPage;
