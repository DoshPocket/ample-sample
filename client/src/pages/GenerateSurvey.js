// data not saving to db yet
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
// import SaveBtn from '../components/SaveBtn';
import ShareableBtn from '../components/ShareableBtn';
// import AddBtn from '../components/AddBtn';
// import RemoveBtn from '../components/RemoveBtn';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_SURVEY } from '../utility/mutations';
// import { CREATE_QUESTION } from '../utility/mutations';
// import { CREATE_CHOICE } from '../utility/mutations';
import { GET_USER } from '../utility/queries';
import { TextField, Grid, Container, Stack, Box, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const GenerateSurvey = () => {
 
  const classes = useStyles();

  const [values, setValues] = useState({});
  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyDescription, setSurveyDescription] = useState('');
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [surveyChoices, setSurveyChoices] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [descriptError, setDescriptError] = useState(false);
  const [questionError, setQuestionError] = useState(false);
  const [choiceError, setChoiceError] = useState(false);

  const { loading, data } = useQuery(GET_USER);
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

  // currently used in onChange within react components so no longer required
  // const handleSurveyTitleChange = (event) => {
  //   setSurveyTitle(event.target.value);
  // };
   
  // const handleSurveyDescChange = (event) => {
  //   setSurveyDescription(event.target.value);
  // };


  const handleQuestChange = (e, questionIndex) => {
    const { value } = e.target;
    setSurveyForm({
      ...surveyForm,
      questions: [...surveyForm.questions.slice(0, questionIndex), {
        question: value,
        choices: surveyForm.questions[questionIndex].choices,
      }, ...surveyForm.questions.slice(questionIndex + 1)],
    });
  };

  const handleChoiceChange = (e, questionIndex, choiceIndex) => {
    const { value } = e.target;
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptError(false);

    if (surveyTitle === '') {
      setTitleError(true);
    }
    if (surveyDescription === '') {
      setDescriptError(true);
    }

    if (surveyQuestions === undefined) {
      setQuestionError(true);
    }

    if (surveyChoices === undefined) {
      setChoiceError(true);
    }
    // const form = event.currentTarget;
    if (surveyTitle && surveyDescription && surveyQuestions && surveyChoices) {
      console.log(surveyTitle, surveyDescription, surveyQuestions, surveyChoices);
      try {
        console.log('inside the try');
        const { surData } = await createSurvey({
          variables: {...surveyForm, user: userData.id},
        });
        console.log(surData);
      } catch (error) {
        throw new Error('something went wrong!');
      }
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
                    <Box height='60vh' display='flex' flex={1} flexDirection='column' overflow='auto' spacing={2} paddingBottom={2}>
                      <form noValidate autoComplete='off' onSubmit={handleFormSubmit}>
                        <h1>Generate Your Survey</h1>
                        <p>Complete the form below and click save to have a survey generated and added to your profile.<br /> To keep your survey data concise, there is a limit of ten questions and four choices per question.</p>
                          <br />
                          <TextField
                            helperText='What is the title of your survey?'
                            label='Survey Title'
                            variant='filled'
                            fullWidth
                            value={surveyTitle}
                            onChange={(e) => setSurveyTitle(e.target.value)}
                            required
                            error={titleError}
                            />
                          <br />
                            <TextField
                              helperText='Write a brief description of your survey.'
                              label='Description'
                              variant='filled'
                              multiline
                              rows={2}
                              fullWidth
                              value={surveyDescription}
                              onChange={(e) => setSurveyDescription(e.target.value)}
                              required
                              error={descriptError}
                              />
                              <br />
                            {surveyForm.questions.map((question, questionIndex) => (
                            <Box key={questionIndex}>
                              <TextField
                                helperText='Write a question for your survey.'
                                label='Question'
                                variant='filled'
                                fullWidth
                                value = {question.question}
                                onChange={(e) => handleQuestChange(e, questionIndex)}
                                required
                                error={questionError}
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
                                    label='Choice'
                                    variant='filled'
                                    fullWidth
                                    value = {choice.choice}
                                    onChange={(e) => handleChoiceChange(e, questionIndex, choiceIndex)}
                                    required
                                    error={choiceError}
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
                                  <Button
                                    color = 'primary'
                                    type='submit'
                                    variant='contained'
                                    onClick={() => handleFormSubmit}
                                  />
                                  </Box>
                                ))}
                              </Box>
                            ))}
                            <br />
                          {/* < SaveBtn /> */}
                          < ShareableBtn />
                      </form>
                    </Box>
                  </Container>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </div>
      );
}

export default GenerateSurvey;