const { Coordinator, Question, Survey } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.Coordinator) {
            const coordinator = await Coordinator.findOne({ _id: context.Coordinator._id })
              .select("-__v -password")
              .populate("survey");
            return coordinator;
          }
    
          throw new AuthenticationError("Not logged in");
        },
        users: async () => {
          return Coordinator.find().select("-__v -password").populate("survey");
        },
        user: async (parent, { email }) => {
          return Coordinator.findOne({ email })
            .select("-__v -password")
            .populate("survey");
        },
      },
        Mutation: {
            signup: async (parent, { name, email, password, company }) => {
                const coordinator = await Coordinator.create({ name, email, password, company });
                const token = signToken(coordinator);
                return {
                    token,
                    coordinator
                };
            },
            login: async (parent, { email, password }) => {
                const coordinator = await Coordinator.findOne({ email });
                if (!coordinator) {
                    throw new AuthenticationError("Invalid credentials");
                }
                const isValid = await coordinator.validatePassword(password);
                if (!isValid) {
                    throw new AuthenticationError("Invalid credentials");
                }
                const token = signToken(coordinator);
                return {
                    token,
                    user: coordinator
                };
            },
            createSurvey: async (parent, { title, description, number_of_questions }, context) => {
                if (context.Coordinator) {
                const survey = await Survey.create({ title, description, number_of_questions });
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: Coordinator._id },
                    { $push: { surveys: survey._id } },
                    { new: true }
                );
                return {
                    coordinator
                };
              }
                throw new AuthenticationError('You need to be logged in to create a question');
            },
            // when you click to save question? the question and it's answers will be instantiated; The survey will be updated to add the question(s) 
            createQuestion: async (parent, { question, answers }, context) => {
                if (context.Coordinator) {
                const questionData = await Question.create({ question, answers });
                const survey = await Survey.findOneAndUpdate(
                    { _id: Survey._id },
                    { $push: { questions: question._id } },
                    { new: true }
                );
                return survey;
              };
              throw new AuthenticationError('You need to be logged in to create a question');
            },
            // when you click the delete button on a survey, the id is passed as an arg to the deleteSurvey function and the Coordinator's surveys array is updated to remove the chosen one. 
            deleteSurvey: async (parent, args, context) => {
                if (context.Coordinator) {
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: Coordinator._id },
                    { $pull: { surveys: { _id: args._id } } },
                    { new: true }
                );
                return coordinator;
                }
                throw new AuthenticationError('You need to be logged in to delete a survey');
            },
            // built similar to book search engine - when you click on the button associated with the question, it is removed from the survey's questions: [Question] array and the survey is returned less that question.
            // if we delete questions need to build additional logic to handle deleting last question, and whether that means deleting the survey
            // deleteQuestion: async (parent, args, context) => {
            //     if (context.Coordinator) {
            //     const survey = await Survey.findOneAndUpdate(
            //         { _id: Survey._id },
            //         { $pull: { questions: args._id } },
            //         { new : true }
            //     );
            //     return survey;
            // }
            // throw new AuthenticationError('You need to be logged in to delete a question');
            // },
        },
};

module.exports = resolvers;