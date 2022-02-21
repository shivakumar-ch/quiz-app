import { Container, Box } from "@mui/material";

function Home() {
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

  return (
    <div>
      <Container>
        <Box>
          <h1>hai</h1>
          <button onClick={loginnnn}>Login</button>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
