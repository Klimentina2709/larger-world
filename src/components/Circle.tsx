import { Box } from "@mui/material";

const Circle = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      flex: 1,
      height: "150px",
      borderRadius: "50% 50% 0% 0%",
      backgroundColor: "#7323F4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      position: "relative",
      margin: "1px",
      overflow: "hidden",
    }}
  >
    {children}
  </Box>
);

export default Circle;
