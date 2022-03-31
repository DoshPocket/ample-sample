import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const theme = createTheme({

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
        <ThemeProvider theme={theme}>
            <Box sx={{mb: 0, mt: 2, px: 2, bgcolor: 'primary.light' }} pb={{xs: 5, sm:8 }}>
                <Container  maxWidth='lg'> 
                    <Grid  container direction='column' alignItems='center' spacing={2} >
                        <Grid item>
                            <Grid container alignItems='center'>
                                An Amplified Inc. Application
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
  }