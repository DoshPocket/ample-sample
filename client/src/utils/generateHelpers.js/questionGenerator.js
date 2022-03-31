//imports tbc
import React, { useState } from "react";
const [surveyQuestions, setSurveyQuestions] = useState([]);

const generateQuestion = () => {

    const emptyQuestion = () => {
    surveyQuestions.push({'title': ''})
    setSurveyQuestions([...surveyQuestions]);
    }

    const addQuestion = (newQuestion, index) => {
    surveyQuestions[index].title = newQuestion
    setSurveyQuestions(surveyQuestions);
    }
}

export default generateQuestion;