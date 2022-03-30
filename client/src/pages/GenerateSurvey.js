import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Nav from '../components/Nav';
// import DeleteBtn from '../components/DeleteBtn';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import LoginBtn from "../components/LoginBtn";
// import LogoutBtn from "../components/LogoutBtn";
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

  export default function Home() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12}>
            <Container>
              <div>
              </div>
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
