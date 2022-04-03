import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
const font =  "'Mukta', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
    palette: {
      background: {
        box: '#58a5f0',
        },
      primary: {
        light: '#58a5f0',
        main: '#0277bd',
        dark: '#004c8c',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#e2f1f8',
        main: '#b0bec5',
        dark: '#808e95',
        contrastText: '#000000',
      }
    }
  });
  

  export default function Footer() {

    return (
      <Typography component={'span'} fontFamily='font'>
        <ThemeProvider theme={theme}>
            <Box sx={{mb: 0, px: 2, bgcolor: '#2F4B8A', color: '#ffffff'}} pb={{xs: 5, sm:8, md: '110px'}}>
                <Container  maxWidth='lg'> 
                    <Grid  container direction='column' alignItems='center' spacing={2} >
                        <Grid item>
                            <Grid container alignItems='center'>
                                <h4>An Amplified Inc. Application</h4>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
        </Typography>
    );
  }