var postsData = [
  {
    id: 1,
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead, Rob Percival",
    content:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!"
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Dev to Deployment",
    author: "Brad Traversy",
    content:
      "Learn by example building & deploying real-world Node.js applications from absolute scratch"
  },
  {
    id: 3,
    title: "JavaScript: Understanding The Weird Parts",
    author: "Anthony Alicea",
    content:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more."
  }
];

const resolvers = {
  Query: {
    allPosts: () => {
      return postsData;
    },
    post: (root, { id }) => {
      return postsData.filter(post => {
        return post.id === id;
      })[0];
    }
  },
  Mutation: {
    createPost: (root, post) => {
      const data = {
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author
      };
      postsData.push(data);
      console.log("Post created sucessfull");
      return data;
    },
    deletePost: (root, post) => {
      const newPostsData = postsData.map(a => {
        return a.id != post.id ? a : null;
      });
      postsData = newPostsData;
      console.log(`Post with id ${post.id} was sucessfully removed!`);
      return postsData;
    },
    updatePost: (root, post) => {
      const data = {
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author
      };
      let a = postsData.map(p => (p.id != post.id ? p : data));
      postsData = a;
      return postsData;
    }
  }
};

export default resolvers;
