// need to import gql tagged template function from apollo server express
const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Query {
    helloWorld: String
  }
`;

module.exports = typeDefs;
