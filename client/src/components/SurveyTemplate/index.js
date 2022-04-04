import React from 'react';
import axios from 'axios';



class SurveyTemplate extends React.Component {
state = {
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
displaySurvey = (posts) => {

  if (!posts.length) return null;


  return posts.map((post, index) => (
    <div key={index} className="displaySurveys">
      <h3>Title: {post.title}</h3>
      <p>Description: {post.description}</p>
      <p>Question: {post.questions}</p>
      <p>Choice: {post.choiceA}</p>
      <p>Choice: {post.choiceB}</p>
      <p>Choice: {post.choiceC}</p>
      <p>Choice: {post.choiceD}</p>
    </div>
  ));
};


render() {

  console.log(this.state);
  //JSX
  return(
    <div className="app">
      <div className="surveys">
        {this.displaySurvey(this.state.posts)}
      </div>
    </div>
  );
}
}


export default SurveyTemplate;



// import React, { Component } from "react";
// import 'survey-react/survey.css';
// import * as Survey from 'survey-react';


// class SurveyTemplate extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//       this.onCompleteComponent = this.onCompleteComponent.bind(this);
//     }
  
//     onCompleteComponent = () => {
//       this.setState({
//         isCompleted: true,
//       });
//     };

//     render() {
//       Survey.StylesManager.applyTheme('defaultV2');
  
//       var json = {
//         title: 'Sample Survey',
//         description: 'Sample Survey description to be filled in here.',
//         pages: [
//           {
//             name: 'page1',
//             elements: [
//               {
//                 type: 'radiogroup',
//                 name: 'question_1',
//                 title: '1 How long have you been using the service?',
//                 choices: [
//                   `{post.title}`,
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_2',
//                 title: '2 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_3',
//                 title: '3 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_4',
//                 title: '4 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_5',
//                 title: '5 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_6',
//                 title: '6 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_7',
//                 title: '7 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_8',
//                 title: '8 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_9',
//                 title: '9 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//               {
//                 type: 'radiogroup',
//                 name: 'question_10',
//                 title: '10 How long have you been using the service?',
//                 choices: [
//                   'Less than a month',
//                   '1-6 months',
//                   '7-12 months',
//                   '1-3 years',
//                 ],
//               },
//             ],
//           },
//         ],
//         showQuestionNumbers: 'off',
//       };
  
//       var surveyRender = !this.state.isCompleted ? (
//         <Survey.Survey
//           json={json}
//           showCompletedPage={false}
//           onComplete={this.onCompleteComponent}
//         />
//       ) : null;
  
//       var onSurveyComplete = this.state.isCompleted ? (
//         <div className="survey-complete">
//           <h3>Thank you for your feedback.</h3>
//           <h5>Your thoughts and ideas will help us to create a great product!</h5>
//         </div>
//       ) : null;
  
//       return (
//         <div className="App">
//           {surveyRender}
//           {onSurveyComplete}
//         </div>
//       );
//     }
//   }
//   export default SurveyTemplate;
  