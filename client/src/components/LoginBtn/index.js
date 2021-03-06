import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@mui/icons-material/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    background: {
      box: '#58a5f0',
      },
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#757de8',
      main: '#3f51b5',
      dark: '#002984',
      contrastText: '#ffffff',
    }
  }
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LoginBtn(props) {
    const classes = useStyles();
  
    return (
      <ThemeProvider theme={theme}>
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#ffffff"}}
          href={props.redirect}
          className={classes.button}
          startIcon={<LoginIcon />}
          onClick={props.handleClick}
        >
        Login
      </Button>
      </div>  
      </ThemeProvider>
  );
}