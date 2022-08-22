import React from "react";
import { Outlet } from "react-router-dom";
import { Box, styled, Container } from "@mui/material";

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
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Box>
  );
};

export default MainLayout;
