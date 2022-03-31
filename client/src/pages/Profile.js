import React from "react";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Auth from "../utils/auth";
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

const GET_COORD = gql`
{
  me {
    _id
    firstName
    lastName
    email
    company
}
}
`;

export default function Profile() {

  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_COORD);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
console.log(token)
  if (!token) {
    return false;
  }
console.log(data)
  if (loading) return "Loading...";
  console.log(JSON.stringify(error, null, 2));
  if (error) return <pre>{error.message}</pre>

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container>
            <Grid container alignItems='center'>
      <ul>
        {data.me.map((coordinator) => (
          <li key={coordinator.id}>{coordinator.email}</li>
        ))}
      </ul>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}