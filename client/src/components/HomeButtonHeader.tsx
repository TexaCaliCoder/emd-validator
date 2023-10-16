import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EnhancedButton from "../shared/button";
import { Slide } from "@mui/material";

const HomeButtonHeader: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/");
  };
  const isValidationRoute = location.pathname === "/validator";

  useEffect(() => {
    if (isValidationRoute) setAnimate(true);
  }, [isValidationRoute]);

  return (
    <>
      {isValidationRoute && (
        <Slide in={animate}>
          <div>
            <EnhancedButton onClick={handleClick} title="return home" />
          </div>
        </Slide>
      )}
    </>
  );
};

export default HomeButtonHeader;
