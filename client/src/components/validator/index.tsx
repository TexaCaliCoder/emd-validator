// External Dependencies
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import ValidationForm from "./ValidationForm";

// Local Variables
const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  width: "50%",
  height: "80vh",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "20px",
    height: "50vh",
  },
}));

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "20px",
  ".MuiTypography-h4": {
    width: "30%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ".MuiTypography-h4": {
      width: "100%",
    },
  },
}));

const Validator: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <StyledWrapper>
      <Slide in={animate}>
        <Typography variant="h4">
          Please input your credit card number in the provided form and click
          validate.{" "}
        </Typography>
      </Slide>
      <Slide in={animate} direction="up">
        <StyledPaper variant="elevation" elevation={3}>
          <ValidationForm />
        </StyledPaper>
      </Slide>
    </StyledWrapper>
  );
};

export default Validator;
