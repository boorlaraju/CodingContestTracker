import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import ContestCard from '../components/ContestCard';

const ContestList = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/contests/upcoming')
            .then((res) => {
                setContests(res.data);
            })
            .catch((err) => {
                console.error('Error fetching contests:', err);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Upcoming Coding Contests
            </Typography>
            <Grid container justifyContent="center">
                {contests.map((contest, index) => (
                    <ContestCard key={index} contest={contest} />
                ))}
            </Grid>
        </div>
    );
};

export default ContestList;
