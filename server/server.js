const path = require("path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
// const { start } = require("repl");

const PORT = process.env.PORT || 3001;
// create new apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //context
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  //integrate our Apollo server with the express application as middleware
  server.applyMiddleware({ app });
  //listens for the connection to be made, then starts the server
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      //log where we can go to test our gql api
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

//Call the sync function to start the server
startApolloServer(typeDefs, resolvers);
