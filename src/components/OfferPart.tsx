import { Box, Container, Typography } from "@mui/material";

function OfferPart() {
  return (
    <Container sx={{ marginBottom: "100px" }}>
      <Typography variant="h5" color={"#ECECEC"}>
        what we offer
      </Typography>
      <Box
        component="img"
        src="/img/graphics/graphic1.png"
        alt="Description of image"
        sx={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          mx: "auto",
        }}
      />{" "}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 5, mb: 5 }}>
        <Box
          sx={{
            flex: "1 1 22%",
          }}
        >
          <Typography variant="subtitle1" color="orange" gutterBottom>
            Title 1
          </Typography>
          <Typography variant="body2" color="#ECECEC">
            This is the content for the first paragraph. It should wrap and
            adjust within its container.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: "1 1 22%",
          }}
        >
          <Typography variant="subtitle1" color="orange" gutterBottom>
            Title 2
          </Typography>
          <Typography variant="body2" color="#ECECEC">
            This is the content for the second paragraph. It should also wrap
            and adjust within its container.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: "1 1 22%",
          }}
        >
          <Typography variant="subtitle1" color="orange" gutterBottom>
            Title 3
          </Typography>
          <Typography variant="body2" color="#ECECEC">
            This is the content for the third paragraph. It will follow the same
            styling and layout.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: "1 1 22%",
          }}
        >
          <Typography variant="subtitle1" color="orange" gutterBottom>
            Title 4
          </Typography>
          <Typography variant="body2" color="#ECECEC">
            This is the content for the fourth paragraph. Each box is designed
            to fit within the row.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default OfferPart;
