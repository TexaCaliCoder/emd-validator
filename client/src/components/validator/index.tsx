// External Dependencies
import React from 'react';
import Paper from '@mui/material/Paper'
import styled from 'styled-components'
import EnhancedButton from '../../shared/button';

const StyledPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    height: '80vh',
    margin: 8,
})

const StyledWrapper = styled.div({
width: '100%',
display: 'flex',
justifyContent: 'space-evenly',
alignItems: 'center',
})

const Validator: React.FC = () =>{
    return (
        <StyledWrapper>
            this is the validator!
            <StyledPaper variant='elevation' elevation={3}>
                
                Paper
                <EnhancedButton onClick={()=> alert('clicked')} title='validate'/>
            </StyledPaper>
        </StyledWrapper>
    )
}

export default Validator;