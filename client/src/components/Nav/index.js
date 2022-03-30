import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LoginBtn from "../LoginBtn";
import GenerateBtn from "../GenerateBtn";
// import LogoutBtn from "../LogoutBtn";

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

export default function Nav() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                              <img src='/Images/ample-sample-logo.png' alt='Ample Sample Logo' width="80" height="80"/>
            </Typography>
              <GenerateBtn color="inherit" />
              <LoginBtn color="inherit" />
            {/* <Button color="inherit"><LogoutBtn /></Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }