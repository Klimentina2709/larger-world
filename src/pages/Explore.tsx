import ExploreContent from "../components/ExploreContent";
import Accordion from "../components/Accordion";
import ExploreVideoCard from "../components/DynamicContent";
import Form from "../components/Form";
import Newsletter from "../components/Newsletters";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
function Explore() {
  return (
    <div>
      <Container>
        <ExploreContent />
        <ExploreVideoCard />
        <Form />
        <Accordion />
        <Newsletter />
      </Container>
      <Footer />
    </div>
  );
}
export default Explore;
