// data not saving to db yet
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import DynamicQuestion from '../components/GenerateForm';
import SaveBtn from '../components/SaveBtn';
// import { Form, Alert } from "react-bootstrap";
import ShareableBtn from '../components/ShareableBtn';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_SURVEY } from '../utility/mutations';
import { CREATE_QUESTION } from '../utility/mutations';
import { CREATE_CHOICE } from '../utility/mutations';
import { GET_ME } from '../utility/queries';
import { FormGroup, FormControl, FormLabel, TextField, InputLabel, Input, Grid, Box, Container, Stack } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));
  
  export default function GenerateSurvey() {
 
  const classes = useStyles();
  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyDescription, setSurveyDescription] = useState('');
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [surveyChoices] = useState([]);

  const { loading, data } = useQuery(GET_ME);
  const coordData = data?.me || {};
  
  const [createSurvey] = useMutation(CREATE_SURVEY);
  const [createQuestion] = useMutation(CREATE_QUESTION);
  const [createChoice] = useMutation(CREATE_CHOICE);
    
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [surveyForm, setSurveyForm] = useState({
    title: '',
    description: '',
    questions: [{
      question: '',
      choices: [{
        choice: '',
      }],
    }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSurveyForm({
      ...surveyForm,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    // TO DO: when form is submitted, create a new survey in the database with all the input fields populate
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopProgagation();
    }

    try {
      const { surData } = await createSurvey({
        variables: {  
          title: surveyTitle,
          description: surveyDescription,
          questions: surveyQuestions,
          choices: surveyChoices,
        },
      });
      console.log(surData);
      setShowAlert(true);
      } catch (error) {
        throw new Error('something went wrong!');
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
        <div style={{background: '#90a4ae'}} className={classes.root}>
          <Container maxWidth='md'>
            <Stack spacing={2}>
              <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='stretch'>
                <Grid item xs={12} mt={10} mb={10}>
                  <Container style={{background:'#ffffff', borderRadius:'10px'}}>
                    <Box height='60vh' display='flex' flexDirection='column'>
                      <Box compnent='form' noValidate flex={1} overflow='auto'>
                        <Stack spacing={2} paddingBottom={2}>
                          <Stack validated={validated} onSubmit={handleFormSubmit}>
                            {/* <Alert
                              dismissible
                              onClose={() => setShowAlert(false)}
                              show={showAlert}
                              variant='danger'
                              >
                            Something went wrong with survey generation!
                            </Alert> */}
                            <FormGroup>
                              {/* <InputLabel>What is the title of your survey?</InputLabel> */}
                              <br />
                              <TextField
                                helperText='What is the title of your survey?'
                                required
                                label='required'
                                defaultValue='Survey Title'
                                variant='filled'
                                />
                              {/* <FormControl
                                name='title'
                                placeholder='Title'
                                type='input'
                                onChange={handleInputChange}
                                value={surveyForm.title}
                                required
                              /> */}
                              {/* <FormControl.Feedback type='invalid'>
                              A survey title is required.
                              </FormControl.Feedback> */}
                            </FormGroup>
                            <br />
                            <FormGroup>
                              {/* <InputLabel>Write a brief description of your survey.</InputLabel> */}
                              <br />
                              <TextField
                                helperText='Write a brief description of your survey.'
                                required
                                label='required'
                                defaultValue='Survey Description'
                                variant='filled'
                                />
                              {/* <FormControl
                              name='description'
                              placeholder='Description'
                              type='text'
                              onChange={handleInputChange}
                              value={surveyForm.description}
                              required
                            /> */}
                              {/* <FormControl.Feedback type='invalid'>
                              A brief survey description is required.
                              </FormControl.Feedback> */}
                            </FormGroup>
                            <br />
                            < DynamicQuestion />
                          </Stack>
                          < SaveBtn />
                          < ShareableBtn />
                        </Stack>
                      </Box>
                    </Box>
                  </Container>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </div>
      );
}
