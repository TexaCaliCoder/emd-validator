// External Dependencies
import Button from '@mui/material/Button'
import { orange } from '@mui/material/colors';
import React from 'react';
import {styled} from '@mui/material/styles'

interface EnhancedButtonProps {
    onClick: () => void,
    title: string,
}

const StyledButton = styled(Button)({
    backgroundColor: orange[300],
    color: 'black',
    width: 200,
    '&:hover':{
        backgroundColor: orange[500],
    }
});

const EnhancedButton: React.FC<EnhancedButtonProps> = ({onClick, title}) => {
    return (
        <>
        <StyledButton 
        onClick={onClick}
        variant='contained'
        >
            {title}
        </StyledButton>
        </>
    )
}

export default EnhancedButton;