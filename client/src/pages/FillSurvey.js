import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import SaveBtn from "../components/SaveBtn";

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

  export default function FillSurvey() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container>
              <Grid container alignItems='center'>
                {/* FILL ME WITH A SCROLLABLE WINDOW AND SURVEYS!!! */}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }