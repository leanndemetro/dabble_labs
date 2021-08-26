
import express from 'express';
import { PORT, MONGODB_URI } from "./src/config/index.js"
import { gql, ApolloServer, } from "apollo-server-express"

import mongoose from "mongoose";
import Country from './src/models/CountrySchema.js';

const app = express();
 
import typeDefs from './src/graphql/typeDefs/index.js';
import resolvers from './src/graphql/resolvers/index.js';

 const server = new ApolloServer({
     typeDefs,
     resolvers,
     context:{
         Country
     }
 }); 

 async function startApp (typeDefs, resolvers) {
     try{
     await mongoose.connect( MONGODB_URI, { useNewUrlParser: true });
     await server.start()
    server.applyMiddleware({ 
        app
     });

    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
      });
    } catch (err) {
        console.log(err.message)
    } 

 } 

 startApp();
