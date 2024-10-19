import { Box, Container, Typography } from "@mui/material";
import OurTeam from "./OurTeam";
import Footer from "./Footer";

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

function BlackPage() {
  return (
    <>
      {" "}
      <Container sx={{ color: "#CCCCCC" }}>
        <Typography variant={"h4"} mt={5} mb={5}>
          carbon neutrality efforts
        </Typography>
        <Box
          component="hr"
          sx={{ border: "1px solid #fa6400", margin: "16px 0" }}
        />
        <Typography component={"p"}>
          as the climate crisis deepens, we need to save every drop of energy
          that we can. larger.world was committed to putting together the most
          regenerative, green and mindful digital space there is. to do so was
          not easy, and in many ways, we failed our expectations. but what we
          managed to do is to have A+ carbon footprint page, and a lot of
          knowledge on where we need to improve, learn and unlearn.
        </Typography>
        <br />
        <Typography component={"p"}>
          that can challenge your ego. here are a few tips for your journey in
          case our content makes you feel uncomfortable
        </Typography>
      </Container>
      <OurTeam paragraph={false} teamMembers={icons} />
      <br />
      <Footer />
    </>
  );
}

export default BlackPage;
