import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@mui/icons-material/Login';
// import Profile from './pages/Profile';
import SurveyTemplate from '../SurveyTemplate';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LoginBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          href="/template"
          className={classes.button}
          startIcon={<LoginIcon />}
        >
        Login
      </Button>
      </div>  
  );
}