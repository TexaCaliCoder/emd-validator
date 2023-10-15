// External Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';


// Internal Dependencies
import EnhancedButton from "../shared/button";
import { Typography } from "@mui/material";


// local variables
const StyledWrapper = styled('div')({
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-evenly',
alignItems: 'center',
height: '80vh',
})

const Home: React.FC = () => {
const navigate = useNavigate();    
const handleClick = () => {
   navigate('/validator')
}



  return (
    <StyledWrapper>
        <Typography variant='h3' >
            Welcome to EMD Validator.
        </Typography> 
    <>
        <EnhancedButton 
        title="Let's Validate"
        onClick={handleClick}
        />
    </>
    </StyledWrapper>
)};

export default Home;
