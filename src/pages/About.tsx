import AboutUsContent from "../components/AboutUsContent";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Newsletter from "../components/Newsletters";
import OurTeam from "../components/OurTeam";
import Accordion from "../components/Accordion";

function About() {
  const teamMembers = [
    {
      imgSrc: "/img/team/barbara-inmann.png",
      name: "Barbara Inmann",
      description: "Head of Board of Advisors",
    },
    {
      imgSrc: "/img/team/jacqueline-kressner.png",
      name: "Jacqueline Kressner",
      description: "Business Development and Sales",
    },
    {
      imgSrc: "/img/team/guillermo-cereza.png",
      name: "Guillermo Cereza",
      description: "Design and Tech",
    },
    {
      imgSrc: "/img/team/christina-forster.png",
      name: "Christina Forster",
      description: "Editor in Chief",
    },
    {
      imgSrc: "/img/team/lindita-fetiu.png",
      name: "Lindita Fetiu",
      description: "Content & Social Medium",
    },
    {
      imgSrc: "/img/team/bistra-kumbaroska.png",
      name: "Bistra Kumbaroska",
      description: "Founder",
    },
  ];
  return (
    <>
      <AboutUsContent />
      <OurTeam teamMembers={teamMembers} paragraph={true} />
      <Form showImage={true} />
      <Newsletter />
      <Accordion />
      <Footer />
    </>
  );
}

export default About;
