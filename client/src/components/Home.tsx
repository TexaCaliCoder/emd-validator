// External Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

// Internal Dependencies
import EnhancedButton from "../shared/button";

// local variables
const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "80vh",
  '.title-container': {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    padding: 18,
  },
});

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/validator");
  };

  return (
    <StyledWrapper>
      <div className="title-container">
        <Typography align="center" variant="h2">Welcome to EMD Validator.</Typography>
        <Typography align="center" variant="h4">
          Please proceed to validate your credit card number.
        </Typography>
      </div>
      <>
        <EnhancedButton title="Let's Validate" onClick={handleClick} />
      </>
    </StyledWrapper>
  );
};

export default Home;
