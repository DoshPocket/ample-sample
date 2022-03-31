import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@mui/icons-material/Login';
// import Home from '../../pages/Home';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    background: {
      box: '#58a5f0',
      },
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e2f1f8',
      main: '#b0bec5',
      dark: '#808e95',
      contrastText: '#000000',
    }
  }
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LoginBtn() {
    const classes = useStyles();
  
    return (
      <ThemeProvider theme={theme}>
      <div>
        <Button
          variant="contained"
          color="primary"
          href="/template"
          className={classes.button}
          startIcon={<LoginIcon />}
          onClick={() => {window.location.href="/template" }}
        >
        Login
      </Button>
      </div>  
      </ThemeProvider>
  );
}