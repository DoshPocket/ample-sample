import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SubmitIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SuvbmitBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#ffffff"}}
          className={classes.button}
          startIcon={<SubmitIcon />}
        >
        Submit
      </Button>
      </div>  
  );
}