import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    setSubmitted(true);
    console.log("that you for subscribing", submitted);
  };

  return (
    <Container
      sx={{
        bgcolor: "#403F3F",
        textAlign: "center",
        padding: "20px",
        marginBottom: "130px",
      }}
    >
      <Box width={"40%"} margin={"0 auto"}>
        <Typography variant="h6" color={"#CCCCCC"}>
          Join our newsletters
        </Typography>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
          required
          className="custom-input"
        />
        <Typography
          textAlign={"start"}
          mb={2}
          component={"p"}
          color={"#CCCCCC"}
        >
          Your email is safe with us
        </Typography>
        <button className="button-orange" onClick={handleSubmit}>
          Subscribe Now
        </button>
        <br />
        <Box
          component="img"
          src="/img/icons/LinkedinWhite.png"
          alt="Newsletter"
          sx={{ width: "20px", height: "auto", marginTop: "20px" }}
        />
      </Box>
    </Container>
  );
}

export default Newsletter;
