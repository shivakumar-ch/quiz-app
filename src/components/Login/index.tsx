import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { height } from "@mui/system";

export default function index() {
  return (
    <Container
      sx={{
        backgroundColor: "#28866e",
        height: "98vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card
        sx={{
          height: "300px",
          width: "520px",
          p: 4,
          pl: 5,
          pr: 5,
          background: "linear-gradient(45deg, #998e62, #7c9885 )",
        }}
      >
        <Typography variant="h6" color="primary">
          Login
        </Typography>
        <TextField
          variant="outlined"
          color="info"
          label="Enter Name"
          fullWidth
          sx={{ mb: 2, mt: 2 }}
        />
        <TextField
          variant="outlined"
          color="info"
          label="Enter Number"
          fullWidth
          sx={{ mb: 2, mt: 2 }}
        />
        <Button variant="contained" color="info">
          Join
        </Button>
      </Card>
    </Container>
  );
}
