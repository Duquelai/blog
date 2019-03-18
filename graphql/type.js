import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: Int!
    title: String
    content: String
    author: String
  }
  type Query {
    allPosts: [Post]
    post(id: Int!): Post
  }
  type Mutation {
    createPost(id: Int, title: String, content: String, author: String): Post
    deletePost(id: Int): Post
    updatePost(id: Int, title: String, content: String, author: String): Post
  }
`;

export default typeDefs;
