import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// HOW TO IMPORT ICONS EXAMPLES BELOW
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            {/* <Route 
              path="/matchup" 
              element={<Matchup />}
            />
            <Route 
              path="/matchup/:id" 
              element={<Vote />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
 }
export default App;


//sample survey below

// import React, { Component } from "react";
// import './index.css';
// import * as Survey from "survey-react";


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//     this.onCompleteComponent = this.onCompleteComponent.bind(this);
//   }

//   onCompleteComponent= () => {
//     this.setState({
//       isCompleted: true
//     });
//   }
// render() {
//   Survey
//     .StylesManager
//     .applyTheme("defaultV2");

// var json = {
//     "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
//     "completedHtmlOnCondition": [
//         {
//             "expression": "{nps_score} > 8",
//             "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
//         }, {
//             "expression": "{nps_score} < 7",
//             "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>"
//         }
//     ],
//     "pages": [
//         {
//             "name": "page1",
//             "elements": [
//                 {
//                     "type": "rating",
//                     "name": "nps_score",
//                     "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
//                     "isRequired": true,
//                     "rateMin": 0,
//                     "rateMax": 10,
//                     "minRateDescription": "(Most unlikely)",
//                     "maxRateDescription": "(Most likely)"
//                 }, {
//                     "type": "checkbox",
//                     "name": "promoter_features",
//                     "visibleIf": "{nps_score} >= 9",
//                     "title": "What features do you value the most?",
//                     "isRequired": true,
//                     "validators": [
//                         {
//                             "type": "answercount",
//                             "text": "Please select two features maximum.",
//                             "maxCount": 2
//                         }
//                     ],
//                     "hasOther": true,
//                     "choices": [
//                         "Performance", "Stability", "User Interface", "Complete Functionality"
//                     ],
//                     "otherText": "Other feature:",
//                     "colCount": 2
//                 }, {
//                     "type": "comment",
//                     "name": "passive_experience",
//                     "visibleIf": "{nps_score} > 6  and {nps_score} < 9",
//                     "title": "What is the primary reason for your score?"
//                 }, {
//                     "type": "comment",
//                     "name": "disappointed_experience",
//                     "visibleIf": "{nps_score} notempty",
//                     "title": "What do you miss and what was disappointing in your experience with us?"
//                 }
//             ]
//         }
//     ],
//     "showQuestionNumbers": "off"
// };

// var surveyRender = !this.state.isCompleted ? (
//   <Survey.Survey
// json={json}
// showCompletedPage={false}
// onComplete={this.onCompleteComponent}
//   />
// ) : null

// var onSurveyComplete = this.state.isCompleted ? (
//   <div className="survey-complete">
//     <h3>Thank you for your feedback.</h3>
//     <h5>Your thoughts and ideas will help us to create a great product!</h5>
//   </div>
// ) : null



// <div className="App">
// {surveyRender}
// {onSurveyComplete}

// </div>