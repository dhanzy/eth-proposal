import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ArrowBack, Cancel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers";

const NewProposal = () => {
  const navigate = useNavigate();
  const [choiceNum, setChoiceNum] = React.useState(2);
  const [proposalForm, setProposalForm] = React.useState({
    title: "",
    description: "",
    choices: [],
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setProposalForm({ ...proposalForm, [e.target.name]: e.target.value });
  };

  const handleChoice = (e) => {
    if (choiceNum < 5) {
      setChoiceNum((prev) => (prev += 1));
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <Box>
          <Box sx={{ my: 3 }}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Box>
            <Stack spacing={2}>
              <TextField
                name="title"
                placeholder="Ask a question..."
                sx={{ fontSize: "20px", fontWeight: 800 }}
                onChange={handleChange}
                value={proposalForm.value}
              />
              <TextField
                placeholder="Tell me more about your proposal"
                name="description"
                value={proposalForm.description}
                onChange={handleChange}
              />
            </Stack>
            <Card sx={{ my: 3 }}>
              <CardHeader title="Choices" />
              <CardContent>
                <Stack spacing={2}>
                  {Array(choiceNum)
                    .fill()
                    .map((_, index) => (
                      <FormControl variant="outlined">
                        <OutlinedInput
                          placeholder={index + 1}
                          endAdornment={
                            <IconButton>
                              <Cancel />
                            </IconButton>
                          }
                        />
                      </FormControl>
                      // <TextField
                      //   placeholder={index + 1}
                      //   key={index}
                      //   endAdornment={<InputAdornment>kg</InputAdornment>}
                      // />
                    ))}
                  <Button variant="contained" onClick={handleChoice}>
                    Add Choice
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card>
          <CardHeader title="Actions" />
          <CardContent>
            <Stack spacing={2}>
              <DateTimePicker
                label="Select Start Date"
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="Select End Date"
                renderInput={(params) => <TextField {...params} />}
              />
              <Button
                variant="contained"
                disabled={!proposalForm.title || !proposalForm.description}
              >
                Publish
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewProposal;
