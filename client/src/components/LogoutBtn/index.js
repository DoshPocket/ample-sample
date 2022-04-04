import { React, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function LogoutBtn() {
  const { user, logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
    console.log("not working")
    Navigate('/');
  };
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
    return (
      <div>
        <Button
          variant="contained"
          style={{background: "#002984", color: "#FFFFFF"}}
          className={classes.button}
          startIcon={<LogoutIcon />}
          href="/"
          onClick={onLogout}
        >
        Logout
      </Button>
      </div>
  );
}