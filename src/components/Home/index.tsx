// <<<<<<< HEAD
import { Container, Box, Grid, Card, Typography } from "@mui/material";

// function Home() {
  // const loginnnn = async () => {
  //   const posts = await fetch("http://localhost:3001/login", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name1: "ashok",
  //     }),
  //   });
  //   const a = await posts.json();
  //   console.log(a);
  // };
// =======
// import { useViewportScroll } from "framer-motion";

function Home() {
  // const scro = useViewportScroll();

  const card = {
    height: "400px",
    boxShadow: "3px 3px 5px 5px #6ca1eb",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // const scrollFunc = () => {
  //   console.log(scro.scrollYProgress.get(), "----");
  // };

  const loginnnn = async () => {
    const posts = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name1: "ashok",
      }),
    });
    const a = await posts.json();
    console.log(a);
  };
// >>>>>>> 0e1aad150d0c93667f631b4dcc5ed9fd8dcdbdc7

  return (
    <div
      style={{
        height: "300vh",
        width: "100vw",
        background: "linear-gradient(45deg,#78c0ff,#bebdff)",
      }}
      // onWheel={scrollFunc}
    >
      <Box
        sx={{
          pl: 10,
          pr: 10,
          pt: 5,
        }}
      >
        <div
          style={{
            position: "relative",
            top: "-35px",
            left: "-130px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.2))",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "relative",
            top: "5px",
            left: "50%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.2))",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "relative",
            top: "-5px",
            left: "300px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.2))",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "relative",
            top: "5px",
            left: "200px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.2))",
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "100px",
            width: "90%",
            minHeight: "600px",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.1))",
            //   backgroundColor: "red",
            borderRadius: "20px",
            zIndex: 10,
            backdropFilter: "blur(3px)",
          }}
        >
          <h1>hai</h1>
        </Box>
        <Box
          sx={{
            position: "relative",
            top: "-100px",
            p: 4,
            backdropFilter: "blur(5px)",
            mt: 2,
            maxWidth: "100%",
            border: "3px solid #6ca1eb",
            borderRadius: "10px",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.1))",

            zIndex: 10,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card sx={card}>
                <Typography variant="body1" color="primary">
                  hai
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={card}>
                <Typography variant="body1" color="primary">
                  hai
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={card}>
                <Typography variant="body1" color="primary">
                  hai
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;