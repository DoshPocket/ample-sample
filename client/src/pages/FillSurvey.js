import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useState} from 'react'
import {Box, Container, Grid} from '@material-ui/core';
import ShareableBtn from '../components/ShareableBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

  export default function FillSurvey() {
    const classes = useStyles();

    const [copySuccess, setCopySuccess] = useState("")
    // const textAreaRef = useRef(null)

    async function copyToClip() {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess("Copied");
        alert('Your Survey Link Copied to Clipboard!')
    }

    return (
      <div style={{background: '#90a4ae'}} className={classes.root}>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12}>
            <Container>
              <Grid container alignItems='center'>
                <Box height="75vh" display="flex" flexDirection="column">
                  <Box flex={1} overflow="auto">
                  <ShareableBtn handleClick={copyToClip} 
                  />
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