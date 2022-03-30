import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav';
import DeleteBtn from '../components/DeleteBtn';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LoginBtn from "../components/LoginBtn";
import LogoutBtn from "../components/LogoutBtn";
import SaveBtn from "../components/SaveBtn";
import ShareableBtn from "../components/ShareableBtn";

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