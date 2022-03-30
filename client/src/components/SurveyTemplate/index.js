import React, { Component } from "react";
import 'survey-react/survey.css';
import * as Survey from 'survey-react';


class SurveyTemplate extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.onCompleteComponent = this.onCompleteComponent.bind(this);
    }
  
    onCompleteComponent = () => {
      this.setState({
        isCompleted: true,
      });
    };

    render() {
      Survey.StylesManager.applyTheme('defaultV2');
  
      var json = {
        title: 'Sample Survey',
        description: 'Sample Survey description to be filled in here.',
        pages: [
          {
            name: 'page1',
            elements: [
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '1 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '2 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '3 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '4 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '5 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '6 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '7 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '8 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '9 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
              {
                type: 'radiogroup',
                name: 'using_duration',
                title: '10 How long have you been using the service?',
                choices: [
                  'Less than a month',
                  '1-6 months',
                  '7-12 months',
                  '1-3 years',
                ],
              },
            ],
          },
        ],
        showQuestionNumbers: 'off',
      };
  
      var surveyRender = !this.state.isCompleted ? (
        <Survey.Survey
          json={json}
          showCompletedPage={false}
          onComplete={this.onCompleteComponent}
        />
      ) : null;
  
      var onSurveyComplete = this.state.isCompleted ? (
        <div className="survey-complete">
          <h3>Thank you for your feedback.</h3>
          <h5>Your thoughts and ideas will help us to create a great product!</h5>
        </div>
      ) : null;
  
      return (
        <div className="App">
          {surveyRender}
          {onSurveyComplete}
        </div>
      );
    }
  }
  export default SurveyTemplate;
  