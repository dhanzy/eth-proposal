import React from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { AddCircleOutlined, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NewProposal = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ maxWidth: "500px", margin: "auto", mb: 3 }}>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>
      </Box>
      <Paper sx={{ maxWidth: "500px", margin: "auto" }}>
        <Box sx={{ py: 5, mx: 3 }}>
          <Stack spacing={3}>
            <TextField name="title" label="title" />
            <TextField name="title" label="title" />
            <TextField name="title" label="title" />
            <TextField name="description" label="description" />
            <TextareaAutosize
              name="description"
              cols={5}
              rows={5}
              label="description"
            />
            <Button variant="contained" startIcon={<AddCircleOutlined />}>
              Add
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default NewProposal;
