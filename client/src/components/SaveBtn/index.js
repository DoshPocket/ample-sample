import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@mui/icons-material/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SaveBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#ffffff"}}
          className={classes.button}
          startIcon={<SaveIcon />}
        >
        Save
      </Button>
      </div>  
  );
}