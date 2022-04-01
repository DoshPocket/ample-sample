// ALL survey resolvers go in here
const { User, surveySchema, questionSchema, choiceSchema } = require('../../models');
const { AuthenticationError } = require("apollo-server-express");


module.exports = {
    // Query: {
    //     getSurvey: async (_, {surveyID}) => {
    //         const survey = await survey.findById(surveyID);
    //         return survey;
    //     },
    // },
    Mutation: {
        createSurvey: async (parent, { args }, context) => {
            const survey = await Survey.create({ args });
            const coordinator = await Coordinator.findOneAndUpdate(
                { _id: Coordinator._id },
                { $push: { surveys: input } },
                { new: true }
            );
            return {
                coordinator
            };
        },
        // when you click to save question? the question and it's choice will be instantiated; The survey will be updated to add the question(s) 
        createQuestion: async (parent, { args, input }, context) => {
            const questionData = await Question.create({ args, input });
            const survey = await Survey.findOneAndUpdate(
                { _id: Survey._id },
                { $push: { questions: input } },
                { new: true }
            );
            return survey;
        },
        // when you click to save choice? the choice will be instantiated; The question will be updated to add the choices(s) 
        createChoice: async (parent, { args, input }, context) => {
            const choiceData = await choiceSchema.create({ args, input });
            const question = await Question.findOneAndUpdate(
                { _id: Question._id },
                { $push: { choices: input } },
                { new: true }
            );
            return question;
        },
        // when you click the delete button on a survey, the id is passed as an arg to the deleteSurvey function and the Coordinator's surveys array is updated to remove the chosen one. 
        deleteSurvey: async (parent, args, context) => {
            const coordinator = await Coordinator.findOneAndUpdate(
                { _id: Coordinator._id },
                { $pull: { surveys: { _id: args._id } } },
                { new: true }
            );
            return coordinator;
        },
    },
};
