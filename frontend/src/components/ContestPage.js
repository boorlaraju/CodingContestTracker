// src/pages/ContestPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import ContestCard from "../components/ContestCard";

const ContestPage = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contests/upcoming")
      .then((res) => setContests(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upcoming Coding Contests
      </Typography>
      <Grid container justifyContent="center">
        {contests.map((contest, idx) => (
          <ContestCard key={idx} contest={contest} />
        ))}
      </Grid>
    </Box>
  );
};

export default ContestPage;
