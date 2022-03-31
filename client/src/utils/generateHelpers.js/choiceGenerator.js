import React, { useState } from "react";
const [surveyChoices, setSurveyChoices] = useState([]);

const generateChoice = () => {

    const emptyChoice = () => {
    surveyChoices.push({'choice': ''})
    setSurveyChoices([...surveyChoices]);
    }

    const addChoice = (newChoice, index) => {
    surveyQuestions[index].title = newChoice
    setSurveyChoices(surveyChoices);
    }
}

export default generateChoice;