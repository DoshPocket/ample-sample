import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import SurveyTemplate from './components/SurveyTemplate';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/register';
import Profile from './pages/Profile';
import GenerateSurvey from './pages/GenerateSurvey';
import Analytics from './pages/Analytics';
import FillSurvey from './pages/FillSurvey';
import CssBaseline from '@mui/material/CssBaseline';


import Nav from './components/Nav';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// import NotFound from './pages/NotFound';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e2f1f8',
      main: '#b0bec5',
      dark: '#808e95',
      contrastText: '#000000',
    }
  }
});



function App() {

  return (
    <React.Fragment>
    <CssBaseline />
      <ThemeProvider theme={theme}>
          <div>
            <Nav />
               <Routes>
                  <Route
                    path="/"
                    element={<Home />}
                  />
                  <Route
                    exact path="/template"
                    element={<SurveyTemplate />}
                    />
                  <Route
                    path="/login"
                    element={<Login />}
                  />
                  <Route
                    path="/register"
                    element={<Register />}
                  />
                    <Route
                    path="/profile"
                    element={<Profile />}
                  />
                    <Route
                    path="/generate"
                    element={<GenerateSurvey />}
                  />
                    <Route
                    path="/analytics"
                    element={<Analytics />}
                  />
                    <Route
                    path="/fill"
                    element={<FillSurvey />}
                  />
                  <Route
                    path="*"
                    element={<NotFound />}
                  />
                </Routes>
             </div>
          <Footer />
      </ThemeProvider>
    </React.Fragment>

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
