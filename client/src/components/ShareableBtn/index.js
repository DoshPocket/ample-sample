import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShareableIcon from '@mui/icons-material/Share';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ShareableBtn(props) {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#ffffff"}}
          className={classes.button}
          startIcon={<ShareableIcon />}
          onClick={props.handleClick}
        >
        Share Survey Link
      </Button>
      </div>  
  );
}