import { Box, Container } from "@mui/material";
import "./aboutUsContent.css";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <div className="about-us-container">
        <section className="section about">
          <h2>about</h2>
          <Box
            component="hr"
            sx={{ border: "1px solid #fa6400", margin: "16px 0" }}
          />
          <p className="description">
            at larger.world, we are dedicated to fostering sustainability,
            diversity, and inclusion in the business world. our unique
            unlearning platform provides professionals with green, mindful, and
            safe spaces to explore new ideas, inclusive narratives, and artistic
            expressions.
          </p>
          <p className="description">
            through our continuous learning workshops, we enable participants to
            apply fresh concepts and create regenerative and inclusive work
            environments.
          </p>
          <div className="circle-container">
            <div className="circle purple-circle">spaces and workshops</div>
            <div className="circle orange-circle">unheard voices</div>
            <div className="circle purple-circle">safe working ecosystems</div>
          </div>
        </section>

        <section className="section unlearning">
          <h2 className="unlearning-heading">why unlearning methodology?</h2>
          <p className="description">
            by supporting and nurturing unlearning pathways, we unravel
            dysfunctional systems thwarted by theory, best practice, and
            hyper-focused growth strategies. we start rebuilding workplaces
            through cognitive ways of reflection and implementation, fostering a
            mindset of continuous learning and growth.
          </p>
          <div className="tree-images"></div>
        </section>

        <Box
          component="img"
          src="/img/graphics/trees.png"
          alt="Trees"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        ></Box>

        <section className="who-we-are">
          <h2>who we are?</h2>
          <p className="description">
            in all services provided by larger.world, our facilitators and
            co-facilitators are instrumental in guiding discussions, fostering
            inclusivity, and promoting critical thinking. we collected tools,
            tips and stories from all across the globe to bring new perspective
            to existing problems.
          </p>
          <p className="description">
            whether it's workshops, events, or other engagements, they bring
            diverse expertise to create collaborative learning experiences.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;
