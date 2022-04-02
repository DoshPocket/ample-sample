//dynamic questions and choices work but are really janky

// react imports
import React, { useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { CREATE_QUESTION } from '../../utils/mutations';
// import { CREATE_CHOICE } from '../../utils/mutations';

// style library imports
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
// import { modalUnstyledClasses } from '@mui/material';
// import { buildQueryFromSelectionSet } from '@apollo/client/utilities';
//import Icon from '@material-ui/core/Icon';
 

const DynamicQuestion = ({ question, choices, setQuestion, setChoices }) => {
  const [questionText, setQuestionText] = useState(question);
  const [choicesText, setChoicesText] = useState(choices);
  const [newQuestFields, setQuestFields] = useState([]);
  const [newChoiceFields, setChoiceFields] = useState([]);
  
  // const [createChoice] = useMutation(CREATE_CHOICE);
  // const [createQuestion] = useMutation(CREATE_QUESTION);

  // submit does not occur within this component but need to leave here for now to avoid errors and test db seeding
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   createQuestion({ variables: { question: questionText } });
  //   createChoice({ variables: { choice: choicesText } });
  //   setQuestion(questionText);
  //   setChoices(choicesText);
  // };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuestionText(value);
  };

  const handleAddQuestion = async () => {
    if (newQuestFields.length <= 9) {
      setQuestFields([...newQuestFields, <TextField
        key={newQuestFields.length}
        name="question"
        label="Question"
        variant="outlined"
        onChange={handleInputChange}
        value={questionText}
      />
      ]);
    }
  };

  const handleRemoveQuestion = () => {
    setQuestFields(newQuestFields.slice(0, -1));
  };  

  const handleChoiceInputChange = (event) => {
    const { value } = event.target;
    setChoicesText(value);
  };

  const handleAddChoice = () => {
    /*check for the length of the newQuestFields
      if newQuestFields array is less than 10
      add up to 4 choices for each question -- NOT WORKING PROPERLY!
      */
    if (newQuestFields.length <= 9) {
      newQuestFields.forEach(() => {
        if (newChoiceFields.length <= 3) {
          setChoiceFields([...newChoiceFields, <TextField
          key={newChoiceFields.length}
          name="choice"
          label="Choice"
          variant="outlined"
          onChange={handleChoiceInputChange}
          value={choicesText}
          />
          ]);
        };
      });
    };
  };
  const handleRemoveChoice = () => {
    setChoiceFields(newChoiceFields.slice(0, -1));
};  

  return (
    <div>
      <p>
        Input your question here:
      </p>
      <TextField 
        name="question"
        label="Question"
        variant="outlined"
        onChange={handleInputChange}
        value={questionText}
      />
      <IconButton
        aria-label="add"
        onClick={handleAddQuestion}
        color="primary"
      >   
        <AddIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={handleRemoveQuestion}
        color="primary"
      >   
        <DeleteIcon />
      </IconButton>
      <br />
      <p>
        Input your choice here:
      </p>
      <TextField
        name="choice"
        label="Choice"
        variant = "outlined"
        onChange={handleChoiceInputChange}
        value={choicesText}
      />
      <IconButton
        aria-label="add"
        onClick={handleAddChoice}
        color="primary"
      >   
      <AddIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={handleRemoveChoice}
        color="primary"
      >   
        <DeleteIcon />
      </IconButton>
      <br />
      {newQuestFields}
      <br />
      {newChoiceFields}
      <br />
    </div>
  );
};

export default DynamicQuestion;