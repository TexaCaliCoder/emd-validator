// External Dependencies
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#faf1d1',
        },
        secondary: {
            main: '#eb6618',
            light: '#f8961f',
            dark: '#d0571c',
            contrastText: 'black'
        },
        success: {
            main: '#4CAF50',
        },

    },
    typography: {
        fontFamily: [
            'Oswald',
            'sans-serif',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,      // Extra small devices (phones)
            sm: 600,    // Small devices (tablets)
            md: 960,    // Medium devices (desktops)
            lg: 1280,   // Large devices (large desktops)
            xl: 1920,   // Extra large devices (extra large desktops)
        },
    },
    transitions: {
        easing: {
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        }
    }
})

export default theme