import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@mui/icons-material/RemoveCircle';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function RemoveBtn(props) {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          onClick={props.handleClick}
          color="secondary"
          className={classes.button}
          startIcon={<RemoveIcon />}
        >
      </Button>
      </div>  
  );
}