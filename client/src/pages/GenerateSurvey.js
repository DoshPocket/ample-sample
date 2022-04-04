import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import SaveBtn from '../components/SaveBtn';
import ShareableBtn from '../components/ShareableBtn';
import AddBtn from '../components/AddBtn';
import RemoveBtn from '../components/RemoveBtn';
import { TextField, Grid, Container, Stack, Box, Button } from '@mui/material';
import axios from 'axios';

class GenerateSurvey extends React.Component {


  state = {
    title: '',
    description: '',
    questions: '',
    choiceA: '',
    choiceB: '',
    choiceC: '',
    choiceD: '',
    posts: []
  };

  componentDidMount = () => {
    this.getSurvey();
  };

  getSurvey = () => {

    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      description: this.state.description,
      questions: this.state.questions,
      choiceA: this.state.choiceA,
      choiceB: this.state.choiceB,
      choiceC: this.state.choiceC,
      choiceD: this.state.choiceD
    };


    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getSurvey();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      title1: '',
      description: '',
      questions: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: ''
    });
  };


  render() {
    
    console.log('State: ', this.state);

    //JSX
    return(
      <div style={{background: '#90a4ae', flexGrow: 1}}>
        <Container maxWidth='md'>
          <Stack spacing={2}>
            <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='stretch'>
              <Grid item xs={12} mt={10} mb={10}>
                <Container style={{background:'#ffffff', borderRadius:'10px'}}>
                  <Box height='60vh' display='flex' flex={1} flexDirection='column' overflow='auto' spacing={2} paddingBottom={2}>
                    <form noValidate autoComplete='off' onSubmit={this.submit}>
                      <h1 style={{color: '#2F4B8A'}}>Generate Your Survey</h1>
                        <p style={{color: '#2F4B8A'}}>Complete the form below and click save to have a survey generated and added to your profile.<br /> To keep your survey data concise, there is a limit of ten questions and four choices per question.</p>
                        <br />
                        <TextField
                          helperText='What is the title of your survey?'
                          label='What is the title of your survey?'
                          variant='filled'
                          name='title'
                          fullWidth
                          value={this.state.title}
                          onChange={this.handleChange}
                          required
                          />
                        <br />
                        <TextField
                                helperText='Write a brief description of your survey.'
                          label='Write a brief description of your survey'
                          variant='filled'
                          name='description'
                          multiline
                          rows={2}
                          fullWidth
                          value={this.state.description}
                          onChange={this.handleChange}
                          required
                          />
                        <br />
                        <TextField
                          helperText='What is your first question?'
                          label='First Question'
                          variant='filled'
                          name='questions'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          name='choiceA'
                          fullWidth
                          value={this.state.choiceA}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          name='choiceB'
                          fullWidth
                          value={this.state.choiceB}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          name='choiceC'
                          fullWidth
                          value={this.state.choiceC}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          name='choiceD'
                          fullWidth
                          value={this.state.choiceD}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your second question?'
                          label='Second Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your third question?'
                          label='Third Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your fourth question?'
                          label='Fourth Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your fifth question?'
                          label='Fifth Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your sixth question?'
                          label='Sixth Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your seven question?'
                          label='Seventh Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your eigth question?'
                          label='Eigth Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your ninth question?'
                          label='Ninth Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='What is your tenth question?'
                          label='Tenth Question'
                          variant='filled'
                          fullWidth
                          value={this.state.questions}
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <TextField
                          helperText='Input your first choice here'
                          label='First Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Second Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Third Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          helperText='Input your first choice here'
                          label='Fourth Choice'
                          variant='filled'
                          fullWidth
                          value={this.state.choices}
                          onChange={this.handleChange}
                          required
                        />
                        <button>Submit</button>
                        </form>
                        {/* {this.displayBlogPost(this.state.posts)} */}
                      < ShareableBtn />
                    </Box>
                  </Container>
                </Grid>
               </Grid>
             </Stack>
           </Container>
        </div>
    );
  };
};

export default GenerateSurvey;