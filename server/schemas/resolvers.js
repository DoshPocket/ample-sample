const { Coordinator, Survey, Question, choiceSchema } = require('../models');
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
            addCoordinator: async (parent, { firstName, lastName, email, password, company }) => {
                const coordinator = await Coordinator.create({ firstName, lastName, email, password, company  });
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
            // in logic to handle survey generation, this should be called once after all choices and questions have been created;
            createSurvey: async (parent, { args }, context) => {
                if (context.Coordinator) {
                const survey = await Survey.create({ args });
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: Coordinator._id },
                    { $push: { savedSurveys: input } },
                    { new: true }
                );
                return {
                    coordinator
                };
              }
                throw new AuthenticationError('You need to be logged in to create a question');
            },
            // when you click to save question? the question and it's choice will be instantiated; The survey will be updated to add the question(s) 
            createQuestion: async (parent, { args, input }, context) => {
                if (context.Coordinator) {
                const questionData = await Question.create({ args, input });
                const survey = await Survey.findOneAndUpdate(
                    { _id: Survey._id },
                    { $push: { savedQuestion: input } },
                    { new: true }
                );
                return survey;
              };
              throw new AuthenticationError('You need to be logged in to create a question');
            },
            // when you click to save choice? the choice will be instantiated; The question will be updated to add the choices(s) 
            createChoice: async (parent, { args, input }, context) => {
                if (context.Coordinator) {
                const choiceData = await choiceSchema.create({ args, input });
                const question = await Question.findOneAndUpdate(
                    { _id: Question._id },
                    { $push: { savedChoice: input } },
                    { new: true }
                );
                return question;
              };
              throw new AuthenticationError('You need to be logged in to create a question');
            },
            // when you click the delete button on a survey, the id is passed as an arg to the deleteSurvey function and the Coordinator's surveys array is updated to remove the chosen one. 
            deleteSurvey: async (parent, args, context) => {
                if (context.Coordinator) {
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: Coordinator._id },
                    { $pull: { savedSurveys: { _id: args._id } } },
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