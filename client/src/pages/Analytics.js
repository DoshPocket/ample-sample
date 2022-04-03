import React from "react";
import { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

  export default function Analytics() {
    const classes = useStyles();

    return (
      <div style={{background: '#90a4ae'}} className={classes.root}>
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
