import { Container } from "@mui/material";

function Home() {
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

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(45deg,#78c0ff,#bebdff)",
      }}
    >
      <Container
        sx={
          {
            // height: "100vh",
            // display: "grid",
            // placeItems: "center",
            //  backgroundColor: "cyan",
          }
        }
      >
        <div
          style={{
            position: "relative",
            top: "5px",
            left: "-120px",
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
            right: "-120px",
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
            left: "-60px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background:
              "linear-gradient(30deg,rgba(255,255,255,0.4),rgba(0,100,200,0.2))",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "100px",
            minWidth: "80%",
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
        </div>
      </Container>
    </div>
  );
}

export default Home;
