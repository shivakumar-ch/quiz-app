import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  useEffect(() => {
    const token = Cookies.get("quizJwtToken");
    if (token !== undefined) {
      navigate("/");
    }
  }, [navigate]);

  const logIn = () => {
    Cookies.set("quizJwtToken", "YOU_ARE_AUTHORISED");
    navigate("/");
  };

  const getName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setName(e.target.value);
  const getNum = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setNum(e.target.value);

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
            Login
          </Typography>
          <TextField
            value={name}
            onChange={getName}
            size="small"
            variant="outlined"
            color="info"
            label="Enter Name"
            fullWidth
            sx={{ mb: 2, mt: 2 }}
          />
          <TextField
            value={num}
            onChange={getNum}
            size="small"
            variant="outlined"
            type="number"
            color="info"
            label="Enter Number"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button onClick={logIn} variant="contained" color="info">
            Join
          </Button>
        </Card>
      </Container>
    </Box>
  );
}
