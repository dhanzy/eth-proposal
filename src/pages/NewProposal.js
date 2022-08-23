import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NewProposal = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3}>
      <Grid item md={8}>
        <Box>
          <Box sx={{ my: 3 }}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Box>
            <Stack spacing={2}>
              <TextField
                placeholder="Ask a question..."
                sx={{ fontSize: "20px", fontWeight: 800 }}
              />
              <TextField placeholder="Tell me more about your proposal" />
            </Stack>
            <Card sx={{ my: 3 }}>
              <CardHeader title="Choices" />
              <CardContent>
                <Stack spacing={2}>
                  <TextField placeholder="1" />
                  <TextField placeholder="2" />
                  <Button variant="contained">Add Choice</Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Card>
          <CardHeader title="Actions" />
          <CardContent>
            <Stack spacing={2}>
              <Button variant="outlined">Select Start Date</Button>
              <Button variant="outlined">Select Start Date</Button>
              <Button variant="contained">Publish</Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewProposal;
