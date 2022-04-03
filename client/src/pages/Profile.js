import React from "react";
// import { useQuery, gql } from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Auth from "../utils/auth";
import Box from '@material-ui/core/Box';
import SurveyCard from "../components/SurveyCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

// const GET_COORD = gql`
// {
//   me {
//     _id
//     firstName
//     lastName
//     email
//     company
// }
// }
// `;

export default function Profile() {

  const classes = useStyles();
//   const { data, loading, error } = useQuery(GET_COORD);
//   const token = Auth.loggedIn() ? Auth.getToken() : null;
// console.log(token)
//   if (!token) {
//     return false;
//   }
// console.log(data)
//   if (loading) return "Loading...";
//   console.log(JSON.stringify(error, null, 2));
//   if (error) return <pre>{error.message}</pre>

  return (
    <div style={{background: '#90a4ae'}} className={classes.root}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12}>
          <Container>
            <Box height="75vh" display="flex" flexDirection="column" >
              <Box flex={1} overflow="auto">
                <Box>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <SurveyCard />
                </Grid>

                {/* FILL ME WITH PERSONAL INFORMATION!!!!! */}
                {/* <ul>
                  {data.me.map((coordinator) => (
                    <li key={coordinator.id}>{coordinator.email}</li>
                  ))}
                </ul> */}
          
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}