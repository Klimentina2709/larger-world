import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import "./form.css";
import "./explorer.css";

interface FormProps {
  showImage?: boolean;
}

const Form: React.FC<FormProps> = ({ showImage = true }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    phone: "",
    comments: "",
  });

  const [isChecked, setIsChecked] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isChecked) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    console.log(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Container sx={{ mt: 5, marginBottom: "100px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={showImage ? 8 : 12}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" gutterBottom color={"#CCCCCC"}>
              connect larger.world
            </Typography>
            <Typography component="p" color={"#CCCCCC"} paragraph>
              our team always active to support you
            </Typography>
            <Box>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email*"
                  required
                  className="custom-input"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name"
                    required
                    className="custom-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="phone"
                    required
                    className="custom-input"
                  />
                </Box>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="comments*"
                  required
                  className="custom-textarea"
                  rows={4}
                />
                <Box sx={{ mt: 2 }}>
                  <Typography component="p" color={"#CCCCCC"}>
                    * indicated a required-field
                  </Typography>
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />{" "}
                    {""}
                    <Typography component={"span"} color={"#CCCCCC"}>
                      i agree that larger.world may contact me at my email
                      address or phone number above
                    </Typography>
                  </label>
                </Box>
                <Box sx={{ mt: 2 }}>
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
                    }}
                    type="submit"
                    disabled={!isChecked}
                  >
                    send
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
        {showImage && (
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src="/img/graphics/leaf.png"
                alt="Example Image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Form;
