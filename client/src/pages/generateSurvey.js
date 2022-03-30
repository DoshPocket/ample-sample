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
