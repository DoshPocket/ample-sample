import React from 'react';
import { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Container, Stack, Box, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

  export default function Analytics() {
    const classes = useStyles();

    return (
      <div style={{background: '#90a4ae'}} className={classes.root}>
        <Container maxWidth='md'>
          <Stack spacing={2}>
            <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='stretch'>
              <Grid item xs={12} mt={10} mb={10}>
                <Container style={{background:'#ffffff', borderRadius:'10px'}}>
                  <Box height='60vh' display='flex' flex={1} flexDirection='column'overflow='auto' spacing={2} paddingBottom={2}>
                    <Box flex={1} overflow='auto'>
                      {/* container with 2 columns */}
                      <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='stretch'>
                        <Box marginTop={2}>
                          <img src='./images/analytics_img_placeholder.png' alt='Analytics' width='500' height='500' />
                        </Box>
                        {/* FILL ME WITH A SCROLLABLE WINDOW, A GENERATED SURVEY AND SURVEY ANALYTICS!!!*/}
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </div>
    );
  }
