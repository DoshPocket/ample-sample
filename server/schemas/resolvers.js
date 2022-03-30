const { Coordinator, Question, Survey } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.Coordinator) {
            const coordinatorData = await Coordinator.findOne({ _id: context.Coordinator._id })
              .select("-__v -password")
              .populate("survey");
            return coordinatorData;
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
                    user: coordinator
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
                const survey = await Survey.create({ title, description, number_of_questions });
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: context.Coordinator._id },
                    { $push: { survey: survey._id } },
                    { new: true }
                );
                return {
                    survey,
                    coordinator
                };
            },
            createQuestion: async (parent, { survey, question }, context) => {
                const questionData = await Question.create({ survey, question });
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: context.Coordinator._id },
                    { $push: { survey: survey._id } },
                    { new: true }
                );
                return {
                    question: questionData,
                    coordinator
                };
            },
            
            deleteSurvey: async (parent, { survey }, context) => {
                const coordinator = await Coordinator.findOneAndUpdate(
                    { _id: context.Coordinator._id },
                    { $pull: { survey: survey._id } },
                    { new: true }
                );
                return {
                    coordinator
                };
            },
        },
};


module.exports = resolvers;
