import { createMuiTheme } from '@material-ui/core/styles';

const articGrey = '#ffffff';
const blackSome = '#e1f4f3';
const greyish = '#30475e';

export default createMuiTheme({
  palette: {
    common: {
      grey: `${greyish}`,
    },
    primary: {
      main: `${articGrey}`,
    },
    secondary: {
      main: `${blackSome}`,
    },
  },
  typography: {
    h4: {
      fontFamily: 'poppins',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'poppins',
      textTransform: 'none',
      fontWeight: 400,
      color: '#888888',
    },
    body2: {
      fontFamily: 'poppins',
      textTransform: 'none',
      fontWeight: 300,
      fontSize: '20px',
      color: '#888888',
    },
    subtitle1: {
      fontFamily: 'poppins',
      textTransform: 'none',
      fontWeight: 300,
      fontSize: '20px',
      color: '#888888',
    },
    subtitle2: {
      fontFamily: 'poppins',
      textTransform: 'none',
      fontWeight: 100,
      fontSize: '17px',
      color: '#888',
    },

    body2: {
      fontFamily: 'poppins',
      fontWeight: 100,
      fontSize: '17px',
      color: '#888',
    },

    h5: {
      fontFamily: 'poppins',
      fontWeight: 700,
      fontSize: '17px',
    },
    h3: {
      fontFamily: 'poppins',
      fontWeight: 300,
      fontSize: '15px',
      color: '#888888 ',
    },

    caption: {
      fontFamily: 'poppins',
      fontWeight: 700,
      fontSize: '15px',
    },
  },
  h2: {
    fontFamily: 'poppins',
    fontWeight: 500,
    color: '#888',
  },
  body: {
   
      fontFamily: 'poppins',
      fontWeight: 700,
      fontSize: '15px',
   
  },
});
