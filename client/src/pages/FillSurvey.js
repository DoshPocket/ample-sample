import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
      <div style={{background: '#90a4ae'}} className={classes.root}>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12}>
            <Container>
              <Grid container alignItems='center'>
                <Box height="75vh" display="flex" flexDirection="column">
                  <Box flex={1} overflow="auto">
                    {/* FILL ME WITH A SURVEY TO FILL OUT!!! */}
                  </Box>
                </Box>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }