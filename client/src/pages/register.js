import {useContext, useState} from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from '../utility/hooks';
import { useMutation } from '@apollo/react-hooks';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import Box from '@material-ui/core/Box';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';

const REGISTER_USER = gql`
mutation Mutation(
    $registerInput: RegisterInput
) {
    registerUser(
        registerInput: $registerInput
    ) {
        email
        username
        token
    }
}
`


function Register(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function registerUserCallback() {
        console.log("Callback hit")
        registerUser();
    }

    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const [ registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData }}) {
            context.login(userData);
            navigate('/profile');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
            
        },
        variables: { registerInput: values }
    });

  return (
    <>
      <Box style={{background: '#90a4ae'}} height="75vh" display="flex" flexDirection="column">
        <Box flex={1} overflow="auto">
        <Container space={2} maxWidth="sm">
        <h3>Register</h3>
        <p>This is the register page, register below to create an account</p>
        <Stack spacing={2} paddingBottom={2}>
            <TextField
                label="Username"
                name="username"
                onChange={onChange}
                />
                <TextField
                label="Email"
                name="email"
                onChange={onChange}
                />
                <TextField
                label="Password"
                name="password"
                onChange={onChange}
                />
                <TextField
                label="Confirm Password"
                name="confirmPassword"
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
        <Button variant="contained" onClick={onSubmit}>Register</Button>
        </Container>
        </Box>
     </Box>
    </>
  );
};

export default Register;