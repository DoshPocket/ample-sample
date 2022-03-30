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

  export default function Analytics() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container>
              <Grid container alignItems='center'>
                {/* FILL ME WITH A SCROLLABLE WINDOW, A GENERATED SURVEY AND SURVEY ANALYTICS!!!*/}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
