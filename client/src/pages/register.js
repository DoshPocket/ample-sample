import {useContext, useState} from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from '../utility/hooks';
import { useMutation } from '@apollo/react-hooks';
import { TextField, Button, Container, Stack, Alert, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import SignupIcon from '@mui/icons-material/PostAdd';
import Box from '@material-ui/core/Box';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import { textAlign } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

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
    const [showPassword,setShow] = useState(false)
    const classes = useStyles();

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
    <div style={{background: '#90a4ae', flexGrow: 1}}>
        <Container maxWidth='md'>
          <Stack spacing={2}>
            <Grid rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='stretch'>
              <Grid item xs={12} mt={10} mb={10}>
                <Container style={{background:'#ffffff', borderRadius:'10px', maxWidth:'500px'}}>
                  <Box height='60vh' display='flex' flex={1} flexDirection='column' overflow='auto' spacing={2} paddingBottom={2} textAlign='center'>
                    <Box textAlign='center' marginTop={2}>
                        <h1 style={{color: '#2F4B8A'}}>Register</h1>
                    </Box>
                        <Stack spacing={2} paddingBottom={2}>
                        <TextField required focused
                            variant="filled"
                            label="Username"
                            name="username"
                            onChange={onChange}
                        />
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
                            type={showPassword?"text":"password"}
                        />
                        <TextField required focused
                            variant="filled"
                            label="Confirm Password"
                            name="confirmPassword"
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
                        <Box textAlign='center'>
                        < br />
                        <Button
                            variant="contained"
                            style={{background: "#002984", color: "#ffffff"}}
                            className={classes.button}
                            startIcon={<SignupIcon />}
                            onClick={onSubmit}
                            >
                            Signup
                        </Button>
                      </Box>
                    </Box>
                  </Container>
              </Grid>
            </Grid>
          </Stack>
        </Container>
    </div>
  );
};

export default Register;