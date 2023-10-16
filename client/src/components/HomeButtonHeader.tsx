import React, { useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EnhancedButton from "../shared/button";
import { Zoom } from "@mui/material";

const HomeButtonHeader: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/");
  };
  const isValidationRoute = location.pathname === "/validator";

  return (
    <>
      {isValidationRoute && (
        <Zoom
          in={animate}
        >
          <EnhancedButton onClick={handleClick} title="return home" />
        </Zoom>
      )}
    </>
  );
};

export default HomeButtonHeader;
