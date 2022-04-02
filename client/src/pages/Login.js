import {useContext, useState} from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from '../utility/hooks';
import { useMutation } from '@apollo/react-hooks';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import LoginIcon from '@mui/icons-material/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    background: {
      box: '#58A5F0',
      },
    primary: {
      light: '#4F5B62',
      main: '#263238',
      dark: '#000A12',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#757DE8',
      main: '#3F51B5',
      dark: '#002984',
      contrastText: '#FFFFFF',
    }
  }
});
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const LOGIN_USER = gql`
mutation login(
$loginInput: LoginInput
) {
    loginUser(
        loginInput: $loginInput
    ) {
        email
        username
        token
    }
}
`
function Login(props) {
    const classes = useStyles();
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    const [showPassword,setShow] = useState(false)


    function loginUserCallback() {
        console.log("Callback hit")
        loginUser();
    }
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
    });
    const [ loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData }}) {
            context.login(userData);
            navigate('/profile');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { loginInput: values }
      });
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box style={{background: '#90A4AE'}} height="75vh" display="flex" flexDirection="column">
        <Box flex={1} overflow="auto">
        <Container space={2} maxWidth="sm">
            <h3>Login</h3>
            <p>This is the login page, login below</p>
            <Stack spacing={2} paddingBottom={2}>
                    <TextField
                    label="Email"
                    name="email"
                    onChange={onChange}
                    />
                    <TextField
                    label="Password"
                    name="password"
                    onChange={onChange}
                    type={showPassword?"text":"password"}
                    />
            </Stack>
            {errors.map(function(error){
                 return (
                    <Alert severity="error">
                      {error.message}
                    </Alert>
                )
             })}
            <Button
            variant="contained"
            className={classes.button}
            style={{background: '#002984', color: '#FFFFFF'}}
            onClick={onSubmit}
            startIcon={<LoginIcon />}>
              Login
              </Button>
            </Container>
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
};
export default Login;
