import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  styled,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import Header from "../Header";

const Main = styled(Box)(() => ({
  minHeight: "70vh",
  marginTop: "50px",
}));

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Main>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgColor: "background.paper",
                }}
              >
                <List component="nav">
                  <ListItemButton component={Link} to="/">
                    <ListItemText primary="Proposals" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="proposal">
                    <ListItemText primary="New Proposal" />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item md={8}>
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Main>
    </Box>
  );
};

export default MainLayout;
