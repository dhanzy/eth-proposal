import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import proposals from "../Data/proposals";
import VoteCard from "../components/VoteCard";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {proposals.map((proposal, index) => (
          <Grid item key={index} md={6}>
            <VoteCard
              title={proposal.title}
              description={proposal.description}
              proposalId={proposal.id}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ my: 5 }}>
        <Button variant="contained" component={Link} to="/proposal">
          Create Proposal
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
