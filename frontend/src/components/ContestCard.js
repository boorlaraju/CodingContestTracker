import React from 'react';
import { Card, CardContent, Typography, Button, Chip } from '@mui/material';

const ContestCard = ({ contest, timer }) => {
  return (
    <Card sx={{ minHeight: 220, backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <Typography variant="h6">{contest.name}</Typography>
        <Chip
          label={contest.platform || 'Unknown Platform'}
          color="secondary"
          size="small"
          sx={{ my: 1 }}
        />
        <Typography variant="body2">Starts In: <strong>{timer}</strong></Typography>
        <Typography variant="body2">Duration: {contest.duration}</Typography>
      </CardContent>
      <Button
        variant="contained"
        size="small"
        sx={{ m: 1 }}
        onClick={() => window.open(contest.url, "_blank")}
      >
        Go to Contest
      </Button>
    </Card>
  );
};

export default ContestCard;
