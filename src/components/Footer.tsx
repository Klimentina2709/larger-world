import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Circle from "./Circle";

const Footer = () => {
  const [showCircles, setShowCircles] = useState([false, false, false]);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight;
      const currentScrollTop = window.scrollY;

      if (scrollPosition >= threshold - 100) {
        showCirclesOneByOne();
      } else if (currentScrollTop < lastScrollTop) {
        hideCirclesOneByOne();
      }

      setLastScrollTop(currentScrollTop);
    };

    const showCirclesOneByOne = () => {
      showCircles.forEach((_, index) => {
        setTimeout(() => {
          setShowCircles((prev) => {
            const newShowCircles = [...prev];
            newShowCircles[index] = true;
            return newShowCircles;
          });
        }, index * 500);
      });
    };

    const hideCirclesOneByOne = () => {
      showCircles.forEach((_, index) => {
        setTimeout(() => {
          setShowCircles((prev) => {
            const newShowCircles = [...prev];
            newShowCircles[index] = false;
            return newShowCircles;
          });
        }, index * 500);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Box
      mt={30}
      component="footer"
      sx={{
        backgroundColor: "#7323F4",
        position: "relative",
        height: "50px",
        width: "100%",
        zIndex: 9999,
        marginBottom: "0",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          {showCircles.map((show, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                opacity: show ? 1 : 0,
                transform: show
                  ? "translateY(0) scale(1)"
                  : "translateY(50%) scale(0)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <Circle>
                {index === 0 && (
                  <Typography
                    textAlign={"center"}
                    variant="caption"
                    component="div"
                    sx={{ listStyleType: "none", padding: 0 }}
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      <li>about</li>
                      <li>search</li>
                      <li>membership</li>
                      <li>my account</li>
                      <li>privacy</li>
                      <li>planet-earth</li>
                    </ul>
                  </Typography>
                )}
                {index === 1 && (
                  <Typography
                    textAlign={"center"}
                    component="div"
                    sx={{ listStyleType: "none", padding: 0 }}
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      <li>planet-earth</li>
                      <li>co-creators</li>
                      <li>community</li>
                      <li>customers-users</li>
                      <li>funders-investors</li>
                    </ul>
                  </Typography>
                )}
                {index === 2 && (
                  <Typography variant="caption">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src="/img/graphics/footer.png"
                        alt="footer"
                        style={{ maxWidth: "300px", height: "auto" }}
                      />
                      <img
                        src="/img/graphics/footer2.png"
                        alt="footer"
                        style={{ maxWidth: "300px", height: "auto" }}
                      />
                    </Box>
                  </Typography>
                )}
              </Circle>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
