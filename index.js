
import express from 'express';
import { PORT } from "./src/config/index.js"
import { gql, ApolloServer, } from "apollo-server-express"

const app = express();

import typeDefs from './src/graphql/typeDefs/index.js';
import resolvers from './src/graphql/resolvers/index.js';

 const server = new ApolloServer({
     typeDefs,
     resolvers,
     context:{}
 });

 async function startApp (typeDefs, resolvers) {
     await server.start()
    server.applyMiddleware({ 
        app
     });

    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
      });

 } 

 startApp();
