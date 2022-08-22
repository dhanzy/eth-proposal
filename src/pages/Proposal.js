import { ArrowBack } from "@mui/icons-material";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Proposal = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>
      </Box>
      <Typography variant="h2">Proposal Title</Typography>
      <Typography component="p">Proposal description</Typography>
      <Box sx={{ my: 5 }}>
        <Stack direction="row" spacing={3}>
          <Button variant="contained">Yes</Button>
          <Button variant="outlined">No</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Proposal;
