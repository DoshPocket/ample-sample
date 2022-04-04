import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import LoginBtn from "../LoginBtn";
import GenerateBtn from "../GenerateBtn";
import LogoutBtn from "../LogoutBtn";
import SignupBtn from "../SignupBtn";
import ProfileBtn from "../ProfileBtn";
import { useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const map={
  '/': [ <LoginBtn redirect='/login'/>, <SignupBtn redirect='/register'/> ],
  '/template': [ <GenerateBtn />, <LogoutBtn /> ],
  '/profile': [ <GenerateBtn />, <LogoutBtn /> ],
  '/generate': [ <ProfileBtn />, <LogoutBtn /> ],
  '/analytics': [ <GenerateBtn />, <ProfileBtn />, <LogoutBtn /> ],
  '/fill': [ <LoginBtn />, <SignupBtn /> ],
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    top: {
        margin: 0,
    }
  }));

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

export default function Nav() {
  const { user, logout } = useContext(AuthContext);

  const classes = useStyles();
  
  const location = useLocation();

  const onLogout = () => {
    logout();
    Navigate('/');
  };
// console.log(user)
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.root}>
      <AppBar style={{background: '#2F4B8A'}} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{paddingTop: '10px', marginLeft: '-20px'}}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <a href='/'>
              <img src='/Images/ample-sample1.png' alt='Ample Sample Logo' width="80" height="80"/>
            </a>
          </Typography>
            {map[location.pathname] && map[location.pathname].map((button, i) => (
              <span key={i}>
                {button}
              </span>
            ))}
        </Toolbar>
      </AppBar>
     </div>
  </ThemeProvider>
  );
}
