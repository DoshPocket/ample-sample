// data not saving to db yet
import React, { useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
import { Form, Alert } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DynamicQuestion from '../components/GenerateForm';
import SaveBtn from '../components/SaveBtn';
import ShareableBtn from '../components/ShareableBtn';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_SURVEY } from '../utility/mutations';
// import { CREATE_QUESTION } from '../utils/mutations';
// import { CREATE_CHOICE } from '../utils/mutations';
// import { GET_ME } from '../utils/queries';

// import Auth from '../utils/auth';

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
// removed [setSurveyTitle, setSurveyDescription, setSurveyQuestions] from useState declarations temporarily
  const [surveyTitle] = useState("");
  const [surveyDescription] = useState("");
  const [surveyQuestions] = useState([]);
  const [surveyChoices] = useState([]);

  // const { loading, data } = useQuery(GET_ME);
  // const coordData = data?.me || {};
  
  const [createSurvey] = useMutation(CREATE_SURVEY);
  // const [createQuestion] = useMutation(CREATE_QUESTION);
  // const [createChoice] = useMutation(CREATE_CHOICE);
    
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
    // TO Do: when form is submitted, create a new survey in the database with all the input fields populated
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

  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }

  return (
        <div className={classes.root}>
          <Grid container spacing={2} alignItems='stretch'>
            <Grid item xs={12}>
              <Container>
                <Box height='75vh' display='flex' flexDirection='column'>
                  <Box flex={1} overflow='auto'>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                      <Alert
                        dismissible
                        onClose={() => setShowAlert(false)}
                        show={showAlert}
                        variant='danger'
                      >
                      Something went wrong with survey generation!
                      </Alert>
                      <Form.Group>
                        <Form.Label htmlFor='title'>What is the title of your survey?</Form.Label>
                        <br />
                        <Form.Control
                          name='title'
                          placeholder='Title'
                          type='text'
                          onChange={handleInputChange}
                          value={surveyTitle}
                          required
                        />
                        <Form.Control.Feedback type='invalid'>
                        A survey title is required.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <br />
                      <Form.Group>
                        <Form.Label htmlFor='description'>What is your survey about?</Form.Label>
                        <br />
                        <Form.Control
                        name='description'
                        placeholder='Description'
                        type='text'
                        onChange={handleInputChange}
                        value={surveyForm.description}
                        required
                      />
                        <Form.Control.Feedback type='invalid'>
                        A brief survey description is required.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <br />
                    {/* <Form.Group>
                      <Form.Label htmlFor='question'>What is the question</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='type your question here'
                        name='description'
                        onChange={handleInputChange}
                        value={surveyForm.questions}
                        required
                      />
                      <Form.Control.Feedback type='invalid'>
                      A question is required for survey to generate.
                      </Form.Control.Feedback>
                    </Form.Group> */}
                    {/* // add dynamicQuestion component here */}
                      < DynamicQuestion />
                    </Form>
                    < SaveBtn />
                    < ShareableBtn />
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </div>
      );
}
