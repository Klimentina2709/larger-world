import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ExplorerItem from "./ExplorerItem";
import "./explorer.css";

function Explorer() {
  const [isFreeUser, setIsFreeUser] = useState(false);
  const [isPaidUser, setIsPaidUser] = useState(false);

  const handleFreeClick = (item: string) => {
    setIsFreeUser(true);
    alert(`You are now a user that can use this ${item}.`);
    console.log(`Free button clicked for ${item}`, isFreeUser);
  };

  const handlePaidClick = (item: string) => {
    setIsPaidUser(true);
    alert(`Paid features for ${item} will be added soon.`);
    console.log(`Paid button clicked for ${item}`, isPaidUser);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 2,
        padding: 2,
        textAlign: "center",
        marginBottom: "100px",
      }}
    >
      <ExplorerItem
        backgroundColor="transparent"
        contentBorder="1px solid #7323F4"
        borderRadius="200px 200px 10px 200px"
        type="team explorer"
        payment={500}
        subscription="enterprise/monthly"
        buttons={
          <>
            <button
              className="button-orange"
              onClick={() => handleFreeClick("enterprise/monthly")}
            >
              free for 30 days
            </button>{" "}
            <button
              className="button-orange-transparent"
              onClick={() => handlePaidClick("enterprise/monthly")}
            >
              buy now
            </button>
          </>
        }
        checkpoints={
          <Box>
            <Typography
              component="p"
              mb={1.5}
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
            >
              everything in solo explorer plus
            </Typography>
            <Typography
              component="p"
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
            >
              50+ users company package, with special perks consulting hours,
              customized training and facilitation services
            </Typography>
          </Box>
        }
      />

      <ExplorerItem
        backgroundColor="#7323F4"
        contentBorder="1px solid #7323F4"
        borderRadius="200px 200px 10px 10px"
        type="team explorer"
        payment={10}
        subscription="user/monthly"
        imageUrl="/img/graphics/MostPopular.png"
        buttons={
          <Box className="explorer-buttons">
            <button
              className="button-orange"
              onClick={() => handleFreeClick("user/monthly")}
            >
              free for 30 days
            </button>{" "}
            <button
              className="button-orange-transparent"
              onClick={() => handlePaidClick("user/monthly")}
            >
              buy now
            </button>
          </Box>
        }
        checkpoints={
          <Box>
            <Typography
              component="p"
              mb={1.5}
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
            >
              everything in solo explorer plus
            </Typography>
            <Typography
              component="p"
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
              mb={1.5}
            >
              video content
            </Typography>
            <Typography
              component="p"
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
              mb={1.5}
            >
              forum/community
            </Typography>
            <Typography
              component="p"
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
              mb={1.5}
            >
              Specialized tools
            </Typography>
          </Box>
        }
      />

      <ExplorerItem
        backgroundColor="transparent"
        contentBorder="1px solid #7323F4"
        borderRadius="200px 200px 200px 10px"
        type="team explorer"
        payment={0}
        subscription="user/monthly"
        buttons={
          <>
            <button
              className="button-orange"
              onClick={() => handleFreeClick("user/monthly")}
            >
              free no cc required
            </button>
          </>
        }
        checkpoints={
          <Box>
            <Typography
              component="p"
              mb={1.5}
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
            >
              access to free content
            </Typography>
            <Typography
              component="p"
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
              mb={1.5}
            >
              access to newsletter
            </Typography>
            <Typography
              component="p"
              sx={{
                border: "1px solid white",
                borderRadius: "60px",
                p: "10px",
              }}
              mb={1.5}
            >
              live events
            </Typography>
          </Box>
        }
      />
    </Container>
  );
}

export default Explorer;
