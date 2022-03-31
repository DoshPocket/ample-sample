import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import SaveBtn from '../components/SaveBtn';
// import ShareableBtn from '../components/ShareableBtn';
import { generateQuestion } from '../utils/generate helpers/questionGenerator';
import { choiceQuestion } from '../utils/generate helpers/choiceGenerator';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_SURVEY } from '../utils/mutations';
import { CREATE_QUESTION } from '../utils/mutations';
import { CREATE_CHOICE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

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

export default function generateSurvey() {
  const classes = useStyles();
  const { loading, data } = useQuery(GET_ME);
  const coordData = data?.me || {};  
    
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [surveyForm, setSurveyForm] = useState({
    title: '',
    description: '',
    questions: [],
  });

  // const [surveyQuestions, setSurveyQuestions] = useState([]);
    
  const [createSurvey] = useMutation(CREATE_SURVEY);
  const [createQuestion] = useMutation(CREATE_QUESTION);
  const [createChoice] = useMutation(CREATE_CHOICE);
    

  const handleInputChange = (event) => {
    // req's authentication?
    const { name, value } = event.target;
    setSurveyForm({ ...surveyForm, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    // reqs authentication?
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopProgagation();
    }

    try {
      const { surData } = await createSurvey({
        variables: { ... surveyForm}
      });
      console.log(data);
      if (error) {
        throw new Error('something went wrong!');
      }
      } catch (err) {
        console.error(err);
      }
    };

    if (loading) {
      return <h2>LOADING...</h2>;
    }

  return (
      <div className={classes.root}>
        <Grid container spacing={2} alignItems='stretch'>
          <Grid item xs={12}>
            <Container>
              {/* <div> */}
                {/* FILL ME WITH A SCROLLABLE WINDOW, FORM TO CREATE SURVEY, A SAVE BUTTON, AND A SHAREABLE BUTTON AT THE END!!!! */}
                  {/* may need a wrapper but assuming that will be within the scrollable container */}
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
                      <Form.Control
                        type='text'
                        placeholder='My first Survey'
                        name='title'
                        onChange={handleInputChange}
                        value={surveyForm.title}
                        required
                      />
                      <Form.Control.Feedback type='invalid'>
                      A survey title is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor='description'>What is your survey about?</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='brief survey description'
                        name='description'
                        onChange={handleInputChange}
                        value={surveyForm.description}
                        required
                      />
                      <Form.Control.Feedback type='invalid'>
                      A brief survey description is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
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
                    </Form.Group>
                  </Form>
                  <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert
                      dismissible
                      onClose={() => setShowAlert(false)}
                      show={showAlert}
                      variant='danger'
                    >
                    Something went wrong with adding a question.
                    </Alert>
                    <Form.Group>
                      <Form.Label htmlFor='title'>What is your next question?</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='type your question here'
                        name='title'
                        onChange={handleInputChange}
                        value={
                          surveyForm.questions}
                        required
                      />
                      <Form.Control.Feedback type='invalid'>
                      A survey title is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
              {/* </div> */}
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
