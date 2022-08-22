import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const VoteCard = ({ title, description, proposalId }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/proposal/${proposalId}`}>
        <CardContent>
          <Box>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Box>{description}</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VoteCard;
