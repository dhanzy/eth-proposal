import React from "react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button variant="outlined" color="common.white">
            Connect Wallet
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
