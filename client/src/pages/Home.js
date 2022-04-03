import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const theme = createTheme({
  palette: {
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

  export default function Home() {
    const { user, logout } = useContext(AuthContext);
    const classes = useStyles();
    const saved = localStorage.getItem("username");

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div style={{background: '#90a4ae'}} className={classes.root}>
        <Grid container direction='column' alignItems='center' spacing={0}>
          <Grid item xs={12}>
            <Box m={2} p={4}>
            <>
        {user ?
            <>
            <h2>Welcome {saved}</h2>
            </>
            :
            <>
            <p>Please login or signup</p>
            </>
        }
        </>
                <img src="/Images/ample-sample-logo2.gif" alt='Ample Sample Animated Logo' width="500" height="500" />
            </Box>
          </Grid>
        </Grid>
      </div>
      </ThemeProvider>
    );
  }
