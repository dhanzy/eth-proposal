import { ArrowBack } from "@mui/icons-material";
import {
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Card,
  Stack,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Proposal = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Box>
          <Box sx={{ mb: 3 }}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Stack spacing={2}>
            <Typography variant="h2">Should burn some Ether?</Typography>
            <Box>
              <Button variant="contained" color="success">
                Active
              </Button>
            </Box>
            <Typography component="p">
              Ether should burn half of total volume.
            </Typography>
          </Stack>
          <Box sx={{ my: 5 }}>
            <Card>
              <CardHeader title="Cast your vote" />
              <CardContent>
                <Stack spacing={1}>
                  <Button variant="outlined">Yes</Button>
                  <Button variant="outlined">No</Button>

                  <Button variant="contained" disabled={false}>
                    Vote
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ my: 5 }}>
            <Card>
              <CardHeader title="votes" />
              <CardContent>
                <Stack spacing={1}>
                  {Array(15)
                    .fill()
                    .map((_, index) => (
                      <Box
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        key={index}
                      >
                        <Avatar />
                        <Typography component="p">0x8Dd0...4Ea7</Typography>
                        <Typography component="p">Yes</Typography>
                        <Typography component="p">10.8 Eth</Typography>
                      </Box>
                    ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Card sx={{ position: "sticky", top: "20px" }}>
          <CardHeader title="Information" />
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Proposal;
