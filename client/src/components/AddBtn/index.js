import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/AddCircle';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddBtn(props) {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          style={{background: "#002984", color: "#ffffff"}}
          onClick={props.handleClick}
          variant="contained"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={props.handleClick}
        >
      </Button>
      </div>  
  );
}