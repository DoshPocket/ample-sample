import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GenerateIcon from '@mui/icons-material/Poll';
// import Home from '../../pages/Home';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function GenerateBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<GenerateIcon />}
          onClick={() => {window.location.href="/template" }}
        >
        Create a Survey
      </Button>
      </div>  
  );
}