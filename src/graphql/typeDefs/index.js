import { gql } from "apollo-server-express";

export default gql `
type Query {
    getAllCountries: [Country!]!
},

type Mutation {
    createNewCountry(newCountry: NewCountry): Country!
}

input NewCountry {
    Country: String!
    Year: String!
    Area_Square_Kilometers: String!
    Total_Population: String!
}

type Country {
    Country: String!
    Year: String!
    Area_Square_Kilometers: String!
    Total_Population: String!
    createdAt: String
    updatedAt: String
}


`; 