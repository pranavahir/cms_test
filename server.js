const typeDefs = require('./src/api/graphql/Schema/index')
const resolvers = require('./src/api/graphql/Resolver/index')
const {join} = require('path')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');
const {
  graphqlUploadExpress, 
} = require('graphql-upload');
const mongoose = require('mongoose')
const keys = require('./src/config/keys')
mongoose.connect(keys.mongoURI,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true},(error) => {
  if(error) {
      throw error
      console.log('MongoDB Connected')
  }
})
async function startServer() {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
  
    const app = express();
  app.use(express.static(join(__dirname,'./src/uploads')))
    // This middleware should be added before calling `applyMiddleware`.
    app.use(graphqlUploadExpress());
  
    server.applyMiddleware({ app });
  
    await new Promise(r => app.listen({ port: 5000 }, r));
  
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
  }
  
  startServer();