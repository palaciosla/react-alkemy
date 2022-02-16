import React from "react";
import { Paper, Box, Typography } from "@mui/material";

const InfoCard = ({ title, color, data }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: color,
        padding: ".5rem",
        textAlign: "center",
        color: "white",
        minWidth: {
          sm: "100px",
          md: "200px",
          lg: "300px",
        },
      }}
    >
      <Typography variant="span">{title}</Typography>
      <Typography variant="h6">{data}</Typography>
    </Paper>
  );
};

export default InfoCard;
