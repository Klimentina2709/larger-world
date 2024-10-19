import { Box, Button, Container, Typography } from "@mui/material";

function Hero() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0",
          marginBottom: "100px",
          marginTop: "50px",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            color={"#ECECEC"}
          >
            unlearning is the evolution
          </Typography>
          <Typography
            color={"#ECECEC"}
            variant="body1"
            sx={{ lineHeight: 1.6 }}
          >
            We enable professionals to utilize new business solutions for a
            regenerative and inclusive world. larger.world is an unlearning
            platform & community, focused on sustainability, diversity, and
            inclusion.
          </Typography>
          <Button
            style={{
              backgroundColor: "#fa6400",
              color: "white",
              borderRadius: "20px",
              fontSize: "0.875rem",
              padding: "6px 12px",
              border: "none",
              cursor: "pointer",
              width: "45%",
              textTransform: "lowercase",
              marginTop: "80px",
            }}
          >
            start
          </Button>
        </Box>

        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <img
            src="/img/graphics/trees.png"
            alt="Hero Image"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>
      </Container>
    </>
  );
}

export default Hero;
