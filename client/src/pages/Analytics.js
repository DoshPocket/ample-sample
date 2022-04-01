import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
        <Grid container spacing={2}  alignItems="stretch">
          <Grid item xs={12}>
            <Container>
                <Box height="75vh" display="flex" flexDirection="column">
                  <Box flex={1} overflow="auto">
                                    {/* FILL ME WITH A SCROLLABLE WINDOW, A GENERATED SURVEY AND SURVEY ANALYTICS!!!*/}
                  </Box>
                </Box>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
