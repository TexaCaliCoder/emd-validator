// External Dependencies
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary: {
            main: '#faf1d1',
        },
        secondary: {
            main:'#eb6618', 
            light:'#f8961f',
            dark:'#d0571c',
            contrastText: 'black'
        }

    },
    typography: {
        fontFamily: [
            'Oswald',
            'sans-serif',
        ].join(','),
    },
})

export default theme