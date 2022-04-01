import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import Auth from '../../utils/auth';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LogoutBtn() {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#ffffff"}}
          className={classes.button}
          startIcon={<LogoutIcon />}
          onClick={Auth.logout}
        >
        Logout
      </Button>
      </div>  
  );
}