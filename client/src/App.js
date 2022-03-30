import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/home.js';
import SurveyTemplate from './components/SurveyTemplate';
import NotFound from './pages/NotFound';
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
            <Route
              path="/template"
              element={<SurveyTemplate />}
            />
            {/* <Route
              path="/matchup/:id"
              element={<Vote />}
            /> */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
 }
export default App;

//sample survey below

// import React, { Component } from 'react';
// import 'survey-react/survey.css';
// import * as Survey from 'survey-react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.onCompleteComponent = this.onCompleteComponent.bind(this);
//   }

//   onCompleteComponent = () => {
//     this.setState({
//       isCompleted: true,
//     });
//   };
//   render() {
//     Survey.StylesManager.applyTheme('defaultV2');

//     var json = {
//       title: 'Sample Survey',
//       description: 'Sample Survey description to be filled in here.',
//       pages: [
//         {
//           name: 'page1',
//           elements: [
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '1 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '2 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '3 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '4 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '5 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '6 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '7 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '8 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '9 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//             {
//               type: 'radiogroup',
//               name: 'using_duration',
//               title: '10 How long have you been using the service?',
//               choices: [
//                 'Less than a month',
//                 '1-6 months',
//                 '7-12 months',
//                 '1-3 years',
//               ],
//             },
//           ],
//         },
//       ],
//       showQuestionNumbers: 'off',
//     };

//     var surveyRender = !this.state.isCompleted ? (
//       <Survey.Survey
//         json={json}
//         showCompletedPage={false}
//         onComplete={this.onCompleteComponent}
//       />
//     ) : null;

//     var onSurveyComplete = this.state.isCompleted ? (
//       <div className="survey-complete">
//         <h3>Thank you for your feedback.</h3>
//         <h5>Your thoughts and ideas will help us to create a great product!</h5>
//       </div>
//     ) : null;

//     return (
//       <div className="App">
//         {surveyRender}
//         {onSurveyComplete}
//       </div>
//     );
//   }
// }
// export default App;
