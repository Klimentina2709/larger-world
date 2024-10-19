import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const imageData = [
  {
    src: "/img/icons/infinityy.png",
    text: "Planet Earth",
    route: "/horizontal",
  },
  {
    src: "/img/icons/CoCreators.png",
    text: "Co-creators",
    route: "/horizontal",
  },
  { src: "/img/icons/Community.png", text: "Text 3" },
  { src: "/img/icons/Customers.png", text: "Text 4" },
  { src: "/img/icons/Funders.png", text: "Text 5" },
];

function Spinner() {
  return (
    <Container sx={{ marginBottom: "100px" }}>
      <Typography variant="h5" color={"#ECECEC"} mb={5}>
        our worlds open their doors
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mt: 10,
          mb: 5,
        }}
      >
        {imageData.map((item, index) => (
          <Box
            sx={{
              textAlign: "center",
              p: 1,
              width: "18%",
              mb: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              justifyContent: "space-between",
            }}
            key={index}
          >
            {item.route ? (
              <Link
                to={item.route}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <img
                  src={item.src}
                  alt={item.text}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
                <Typography variant="body2" color="#FF5722" mt={1}>
                  {item.text}
                </Typography>
              </Link>
            ) : (
              <>
                <img
                  src={item.src}
                  alt={item.text}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
                <Typography variant="body2" color="#FF5722" mt={1}>
                  {item.text}
                </Typography>
              </>
            )}
          </Box>
        ))}

        <Button
          style={{
            backgroundColor: "#fa6400",
            color: "white",
            borderRadius: "20px",
            fontSize: "0.875rem",
            padding: "6px 12px",
            border: "none",
            cursor: "pointer",
            width: "45%",
            textTransform: "lowercase",
            marginTop: "80px",
          }}
        >
          <Link to="/black" style={{ color: "white" }}>
            wonder why our page is black
          </Link>
        </Button>
      </Box>
    </Container>
  );
}

export default Spinner;
