// External Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

// Internal Dependencies
import EnhancedButton from "../shared/button";


// local variables
const StyledWrapper = styled.div({
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-evenly',
alignItems: 'center',
height: '80vh'
})

const Home: React.FC = () => {
const navigate = useNavigate();    
const handleClick = () => {
   navigate('/validator')
}



  return (
    <StyledWrapper>
        Welcome to EMD Validator. <br/>
        Please proceed to validate your credit card number. 
    <>
        <EnhancedButton 
        title="Let's Validate"
        onClick={handleClick}
        />
    </>
    </StyledWrapper>
)};

export default Home;
