import { ApolloServer } from "apollo-server-express";
import typeDefs from "./type";
import resolvers from "./resolvers";

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      "editor.theme": "light"
    }
  }
});

export default SERVER;
