import { Container, Typography, Box } from "@mui/material";

import Form from "../components/Form";
import Newsletter from "../components/Newsletters";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Container sx={{ marginBottom: "100px", marginTop: "100px" }}>
        <Typography variant="h3" color={"#ECECEC"}>
          contact larger.world
        </Typography>
        <Box
          component="hr"
          sx={{ border: "1px solid #fa6400", margin: "16px 0" }}
        />
        <Typography component={"p"} color={"#ECECEC"} mb={5}>
          no matter if you have a question, a suggestion, a concern or simply
          wanna chat – we would love to hear from you!
        </Typography>
        <Typography component={"p"} color={"#ECECEC"} mb={5}>
          join our community on Linkedin{" "}
          <img
            src="/img/icons/Linkedin.png"
            alt="user"
            style={{ width: "15px", height: "auto" }}
          />
        </Typography>
        <Typography component={"p"} color={"#ECECEC"} mb={5}>
          c/o Widelake Bakery Breitenseerdtraße 30b 1140 Vienna Austria
        </Typography>
      </Container>
      <Form showImage={false} />
      <Newsletter />

      <Footer />
    </>
  );
}

export default Contact;
