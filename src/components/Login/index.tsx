import React from "react";
import "./index.css";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function index() {
  return (
    <Box sx={{ backgroundColor: "#94a3a8" }}>
      <Container
        sx={{
          //  backgroundColor: "#28866e",
          height: "98vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Card
          sx={{
            height: "200px",
            width: "520px",
            p: 4,
            pl: 5,
            pr: 5,
            background: "linear-gradient(45deg, #edf1f2, #cad9de )",
          }}
        >
          <Typography variant="h6" color="primary">
            Let's Begin !!!.
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            color="info"
            label="Enter Name"
            fullWidth
            sx={{ mb: 2, mt: 2 }}
          />
          <TextField
            size="small"
            variant="outlined"
            color="info"
            label="Enter Number"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="info">
            Join
          </Button>
        </Card>
      </Container>
    </Box>
  );
}
