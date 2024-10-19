import { Container, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HowItWorksContent from "../components/HowItWorksContent";
import Newsletter from "../components/Newsletters";
import OurTeam from "../components/OurTeam";

function HowItWorks() {
  const icons = [
    {
      imgSrc: "/img/icons/stop.png",
      description: "Take a break and revisit the content later — ",
    },
    {
      imgSrc: "/img/icons/dig.png",
      description: "Share your feelings to someone of your choice without ",
    },
    {
      imgSrc: "/img/icons/dig.png",
      description: "Unsure or uncertain about some ",
    },
    {
      imgSrc: "/img/icons/ask.png",
      description: "If you have a question you can reach out to ",
    },
    {
      imgSrc: "/img/icons/join.png",
      description: "We are currently working on an exchange channel ",
    },
  ];

  return (
    <>
      <HowItWorksContent />
      <Container sx={{ color: "#CCCCCC" }}>
        <Typography variant={"h4"}>tips</Typography>
        <Typography component={"p"}>
          as much as we want you to feel comfortable in your way of traveling,
          we are also aware that the journey of unlearning is an uncomfortable
          one
        </Typography>
        <br />
        <Typography component={"p"}>
          that can challenge your ego. here are a few tips for your journey in
          case our content makes you feel uncomfortable
        </Typography>
      </Container>
      <OurTeam paragraph={false} teamMembers={icons} />
      <Form showImage={true} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default HowItWorks;
