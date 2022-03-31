import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SignupIcon from '@mui/icons-material/PostAdd';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignupBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<SignupIcon />}
        >
        Signup
      </Button>
      </div>  
  );
}