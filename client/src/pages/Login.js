import {useContext, useState} from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from '../utility/hooks';
import { useMutation } from '@apollo/react-hooks';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import LoginBtn from '../components/LoginBtn';


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
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState([]);

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
      <Box style={{background: '#90a4ae'}} height="75vh" display="flex" flexDirection="column">
        <Box flex={1} overflow="auto">
          <Container space={2} maxWidth="sm">
            <Box container textAlign='center'>
              <h1>Login</h1>
            </Box>
                <Stack direction='column' justifyContent='space-between' spacing={4} padding={4}>
                        <TextField required focused
                        variant="filled"
                        label="Email"
                        name="email"
                        onChange={onChange}
                        />
                        <TextField required focused
                        variant="filled"
                        label="Password"
                        name="password"
                        onChange={onChange}
                        />
                </Stack>
                {errors.map(function(error){
                  return (
                  <Alert severity="error">
                    {error.message}
                  </Alert>
                )
              })}
              <Box textAlign='center'>
              <LoginBtn handleClick={onSubmit} variant='contained'/>
              </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Login;
