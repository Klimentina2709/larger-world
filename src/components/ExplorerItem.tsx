import { Box, Typography } from "@mui/material";

interface Explorer {
  type: string;
  payment: number;
  subscription: string;
  buttons?: React.ReactNode;
  checkpoints?: React.ReactNode;
  contentBorder: string;
  borderRadius: string;
  backgroundColor: string;
  imageUrl?: string;
}

function ExplorerItem({
  type,
  payment,
  subscription,
  buttons,
  checkpoints,
  contentBorder,
  borderRadius,
  backgroundColor,
  imageUrl,
}: Explorer) {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "50px 10px",
        backgroundColor: backgroundColor,
        border: contentBorder,
        width: "30%",
        color: "whitesmoke",
        borderRadius: borderRadius,
      }}
    >
      {imageUrl && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "80px", 
            height: "80px", 
            borderRadius: "0 0 0 10px", 
            overflow: "hidden",
          }}
        >
          <img
            src={imageUrl}
            alt="Top Right Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      )}
      <Box>
        <Typography variant="h5" mb={1.5}>
          {type}{" "}
        </Typography>
        <Typography variant="h3" mb={1.5}>
          {payment} €
        </Typography>
        <Typography component="p" mb={1.5}>
          {subscription}
        </Typography>
      </Box>
      <Box mb={3}>
        <Box>{buttons}</Box>
      </Box>
      <Box p={2}>{checkpoints}</Box>
    </Box>
  );
}

export default ExplorerItem;
