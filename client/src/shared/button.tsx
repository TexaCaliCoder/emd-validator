// External Dependencies
import Button from '@mui/material/Button'
import React from 'react';
import {styled} from '@mui/material/styles'

interface EnhancedButtonProps {
    onClick: () => void,
    title: string,
}

const StyledButton = styled(Button)(({theme})=> ({
    backgroundColor: theme.palette.secondary.light,
    color: 'black',
    width: 200,
    margin: 18,
    '&:hover':{
        backgroundColor: theme.palette.secondary.main,
    }
}));

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