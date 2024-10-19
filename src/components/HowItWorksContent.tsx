import { Container } from "@mui/material";
import "./howItWorksContent.css";

const HowItWorks = () => {
  return (
    <Container>
      <div className="pageBackgroundColor">
        <div>
          <div className="title border-bold">
            <p className="margin-left">how it works</p>
            <div className="border-horizontal margin-left"></div>
          </div>
          <div className="text-container">
            <div className="margin-left">
              <p>
                how it works, it actually up to you. you can travel and explore
                our worlds in any order and time you feel comfortable with.
                however, there is still some background info you might find
                useful during your new unlearning journey.
              </p>
            </div>
          </div>
          <div className="title-world text-center">
            <p>how we create world</p>
          </div>
          <div className="d-flex icons">
            <div className="flex-33 icon">
              <img src={"/img/icons/Icon1.png"} alt="cloud-icon" />
              <p>
                our worlds are created based on "responsibility fields," where
                pressing and major global issues are occurring and recent
                efforts haven't brought the needed change.
              </p>
            </div>
            <div className="flex-33 icon">
              <img src={"/img/icons/Icon2.png"} alt="clock-icon" />
              <p>
                we (as humans) are currently screwing up big time in these
                fields - to put it politely, as current efforts are falling
                short in addressing these crucial areas.
              </p>
            </div>
            <div className="flex-33 icon">
              <img src={"/img/icons/Icon3.png"} alt="light-icon" />
              <p>
                Our extensive research uncovers examples that tackle these
                issues from often unknown perspectives, frequently unnoticed by
                mass media. This is what you will find on larger.world!
              </p>
            </div>
          </div>
          <div className="travelWorld text-center">
            <img
              src="/img/graphics/travelOurWorld.png"
              alt="travelOurWorld-photo"
              className="img-fit-container"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
