import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SignupIcon from '@mui/icons-material/PostAdd';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignupBtn(props) {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#ffffff"}}
          href={props.redirect}
          className={classes.button}
          startIcon={<SignupIcon />}
          onClick={props.handClick}
        >
        Signup
      </Button>
      </div>  
  );
}