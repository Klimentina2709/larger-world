import { Container, Typography } from "@mui/material";
import Explorer from "../components/Explorer";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Newsletter from "../components/Newsletters";
import OfferPart from "../components/OfferPart";
import Spinner from "../components/Spinner";
import Hero from "../components/Hero";

function LandingPage() {
  return (
    <>
      <Hero />
      <Spinner />
      <OfferPart />
      <Container sx={{ marginBottom: "100px", marginTop: "100px" }}>
        <Typography variant="h5" color={"#ECECEC"}>
          different ways to explore our worlds
        </Typography>

        <Typography component={"p"} color={"#ECECEC"} mb={5}>
          take your time to estimate what membership works best for you at this
          point
        </Typography>
      </Container>
      <Explorer />
      <Form showImage={true} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default LandingPage;
