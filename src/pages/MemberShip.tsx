import { Box, Container, Typography } from "@mui/material";
import Explorer from "../components/Explorer";
import Form from "../components/Form";
import Newsletter from "../components/Newsletters";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function MemberShip() {
  return (
    <>
      <Container sx={{ marginBottom: "100px", marginTop: "100px" }}>
        <Typography variant="h3" color={"#ECECEC"}>
          membership
        </Typography>
        <Box
          component="hr"
          sx={{ border: "1px solid #fa6400", margin: "16px 0" }}
        />
        <Typography component={"p"} color={"#ECECEC"}>
          already a member? {""}
          <Link
            to="/"
            style={{
              color: "#fa6400",
              textDecoration: "none",
            }}
          >
            sign up here {""}
            <img
              src="/img/icons/User.png"
              alt="user"
              style={{ width: "15px", height: "auto" }}
            />
          </Link>
        </Typography>
      </Container>
      <Explorer />
      <Form showImage={true} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default MemberShip;
