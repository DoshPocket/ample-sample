// data not saving to db yet
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import SaveBtn from '../components/SaveBtn';
import ShareableBtn from '../components/ShareableBtn';
import AddBtn from '../components/AddBtn';
import RemoveBtn from '../components/RemoveBtn';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_SURVEY } from '../utility/mutations';
import { CREATE_QUESTION } from '../utility/mutations';
import { CREATE_CHOICE } from '../utility/mutations';
import { GET_ME } from '../utility/queries';
import { TextField, Grid, Container, Stack, Box, FormGroup, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));
  
export default function GenerateSurvey() {
 
  const classes = useStyles();

  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyDescription, setSurveyDescription] = useState('');
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [surveyChoices, setSurveyChoices] = useState([]);

  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  
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

  const handleSurveyTitleChange = (event) => {
    setSurveyTitle(event.target.value);
  };
   
  const handleSurveyDescChange = (event) => {
    setSurveyDescription(event.target.value);
  };

  const handleAddQuestion = () => {
    if (surveyForm.questions.length < 10) {
      setSurveyForm({
        ...surveyForm,
        questions: [...surveyForm.questions, {
          question: '',
          choices: [{
            choice: '',
          }],
        }],
      });
    };
  };

  const handleAddChoice = (questionIndex) => {
    if (surveyForm.questions[questionIndex].choices.length < 5) {
      setSurveyForm({
        ...surveyForm,
        questions:[...surveyForm.questions.slice(0, questionIndex), {
          question: surveyForm.questions[questionIndex].question,
          choices: [...surveyForm.questions[questionIndex].choices, {
            choice: '',
          }],
        }, ...surveyForm.questions.slice(questionIndex + 1)],
      });
    };
  };

  const handleRemoveQuestion = (questionIndex) => {
    if (surveyForm.questions.length > 1) {
      setSurveyForm({
        ...surveyForm,
        questions: [...surveyForm.questions.slice(0, questionIndex), ...surveyForm.questions.slice(questionIndex + 1)],
      });
    };
  };

  const handleRemoveChoice = (questionIndex, choiceIndex) => {
    if (surveyForm.questions[questionIndex].choices.length > 1) {
      setSurveyForm({
        ...surveyForm,
        questions: [...surveyForm.questions.slice(0, questionIndex), {
          question: surveyForm.questions[questionIndex].question,
          choices: [...surveyForm.questions[questionIndex].choices.slice(0, choiceIndex), ...surveyForm.questions[questionIndex].choices.slice(choiceIndex + 1)],
        }, ...surveyForm.questions.slice(questionIndex + 1)],
      });
    };
  };  

  const handleQuestChange = (event, questionIndex) => {
    const { value } = event.target;
    setSurveyForm({
      ...surveyForm,
      questions: [...surveyForm.questions.slice(0, questionIndex), {
        question: value,
        choices: surveyForm.questions[questionIndex].choices,
      }, ...surveyForm.questions.slice(questionIndex + 1)],
    });
  };

  const handleChoiceChange = ( event, questionIndex, choiceIndex) => {
    const { value } = event.target;
    setSurveyForm({
      ...surveyForm,
      questions: [...surveyForm.questions.slice(0, questionIndex), {
        question: surveyForm.questions[questionIndex].question,
        choices: [...surveyForm.questions[questionIndex].choices.slice(0, choiceIndex), {
          choice: value,
        }, ...surveyForm.questions[questionIndex].choices.slice(choiceIndex + 1)],
      }, ...surveyForm.questions.slice(questionIndex + 1)],
    });
  }

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
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
    return <h2>page loading...</h2>;
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
                          <Stack onSubmit={handleFormSubmit}>
                            <FormGroup>
                              <br />
                              <TextField
                                helperText='What is the title of your survey?'
                                required
                                label='required'
                                variant='filled'
                                />
                            </FormGroup>
                            <br />
                            <FormGroup>
                              <br />
                              <TextField
                                helperText='Write a brief description of your survey.'
                                required
                                label='required'
                                variant='filled'
                                />
                            </FormGroup>
                            <br />
                            <br />
                            <br />
                            <Box>
                        <FormGroup>
                          {surveyForm.questions.map((question, questionIndex) => (
                          <Box key={questionIndex}>
                            <TextField
                              helperText='Write a question for your survey.'
                              required
                              label='required'
                              variant='filled'
                              value = {question.question}
                              onChange={(event) => handleQuestChange(event, questionIndex)}
                            />
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={() => handleAddQuestion(questionIndex)}>Add</Button>
                          <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => handleRemoveQuestion(questionIndex)}>Remove</Button>
                          <br />
                            {question.choices.map((choice, choiceIndex) => (
                              <Box key={choiceIndex}>
                                <TextField
                                  helperText='Write a choice for your survey.'
                                  required
                                  label='required'
                                  variant='filled'
                                  value = {choice.choice}
                                  onChange={(event) => handleChoiceChange(event, questionIndex, choiceIndex)}
                                />
                                {/* <AddBtn onClick={handleAddChoice}></AddBtn> */}
                                <Button
                                  variant='contained'
                                  color='primary'
                                  onClick={() => handleAddChoice(questionIndex)}>Add</Button>
                                <Button
                                  variant='contained'
                                  color='secondary'
                                  onClick={() => handleRemoveChoice(questionIndex, choiceIndex)}>Remove</Button>
                                {/* <DeleteBtn onClick={() => handleRemoveChoice(questionIndex, choiceIndex)}></DeleteBtn> */}
                              </Box>
                            ))}
                          </Box>
                        ))}
                        </ FormGroup>
                            </Box>
                            <br />
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
