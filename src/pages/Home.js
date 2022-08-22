import React from "react";
import { Box, Grid } from "@mui/material";

import proposals from "../Data/proposals";
import VoteCard from "../components/VoteCard";

const Home = () => {
  return (
    <Box>
      <Grid item md={8}>
        <Grid container spacing={3}>
          {proposals.map((proposal, index) => (
            <Grid item key={index} md={12}>
              <VoteCard
                title={proposal.title}
                description={proposal.description}
                proposalId={proposal.id}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
