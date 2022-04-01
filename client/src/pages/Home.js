import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
// import Nav from '../components/Nav';
// import DeleteBtn from '../components/DeleteBtn';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import SubmitBtn from "../components/SubmitBtn";
// import Profile from "./Profile";
// import SignupBtn from "../components/SignupBtn";
// import ProfileBtn from "../components/ProfileBtn";
// import ShareableBtn from "../components/ShareableBtn";
// import ReactPlayer from "react-player";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
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

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div style={{background: '#90a4ae'}} className={classes.root}>
        <Grid container direction='column' alignItems='center' spacing={0}>
          <Grid item xs={12}>
            <Box m={2} p={4}>
                <img src="./images/ample-sample-logo.gif" alt='Ample Sample Animated Logo' width="500" height="500" />
            </Box>
            <>
        {user ?
            <>
            <h2>{user.email} is logged in</h2>
            </>
            :
            <>
            <p>Please login or signup</p>
            </>
        }
        </>
          </Grid>
        </Grid>
      </div>
      </ThemeProvider>
    );
  }

  // Green #c8e6c9
// Grey #90a4ae
