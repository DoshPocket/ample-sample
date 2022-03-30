import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShareableIcon from '@mui/icons-material/Share';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ShareableBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ShareableIcon />}
        >
        Share Survey Link
      </Button>
      </div>  
  );
}