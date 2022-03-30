import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import DeleteBtn from '../components/DeleteBtn';

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

  export default function Profile() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container>
              <Grid container alignItems='center'>
                {/* FILL ME WITH A SCROLLABLE WINDOW, COORDINATOR'S LIST OF SURVEYS AND A DELETE BUTTON*/}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
