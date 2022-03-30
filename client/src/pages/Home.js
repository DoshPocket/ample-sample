import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Nav from '../components/Nav';
// import DeleteBtn from '../components/DeleteBtn';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import LoginBtn from "../components/LoginBtn";
// import LogoutBtn from "../components/LogoutBtn";
// import SaveBtn from "../components/SaveBtn";
// import ShareableBtn from "../components/ShareableBtn";
// import ReactPlayer from "react-player";

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

  export default function Home() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container>
              <Grid container alignItems='center'>
                <img src="/Images/ample-sample-logo.gif" alt='Ample Sample Animated Logo' width="500" height="500" />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
