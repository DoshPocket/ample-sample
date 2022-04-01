import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import SaveBtn from "../components/SaveBtn";
// import ShareableBtn from "../components/ShareableBtn";

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



  export default function GenerateSurvey() {
    const classes = useStyles();

    return (
      <div style={{background: '#90a4ae'}} className={classes.root}>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12}>
            <Container>
              <Box height="75vh" display="flex" flexDirection="column">
                <Box flex={1} overflow="auto">
                  {/* FILL ME WITH PROMPTS TO CREATE A SURVEY!!!! */}
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
// import React, { useState, useEffect } from 'react';
// // import components to be used from material-ui
// import { useMutation, useQuery } from '@apollo/react-hooks';
// import Auth from '../utils/auth';

// const generateSurvey = () => {};
//   const [deleteBook, { error }] = useMutation(DELETE_BOOK);
//   const { loading, data } = useQuery(GET_ME);
//   const userData = data?.me || {};

//   // create function that accepts the book's mongo _id value as param and deletes the book from the database
//   const handleDeleteBook = async (bookId) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }
//     try {
//       const { data } = await deleteBook({
//         variables: { bookId },
//       });
//       console.log(data);
//       if (error) {
//         throw new Error('something went wrong!');
//       }
//       removeBookId(bookId);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // if data isn't here yet, say so
//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }

//   return (
//     <>
//     </>
//   );
// };

// export default generateSurvey;
