import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#000000',

          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
  },
});