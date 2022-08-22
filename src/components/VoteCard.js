import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";

const VoteCard = ({ title, description, proposalId, address }) => {
  return (
    <Card>
      <CardActionArea
        component={Link}
        to={`/proposal/${String(proposalId).substring(0, 3)}`}
      >
        {/* <CardHeader title={`Ethereum Finance by ${address}`} /> */}
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
