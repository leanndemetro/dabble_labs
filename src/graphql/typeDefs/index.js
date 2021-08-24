import { gql } from "apollo-server-express";

export default gql `
type Query {
    _:String!
hello: String!
random: String!
}

type Mutation{
    _:String!
}

type Subscription {
    _:String!
}
`; 