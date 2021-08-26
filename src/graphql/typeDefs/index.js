import { gql } from "apollo-server-express";

export default gql `
type Query {
    getAllCountries: [Country!]!
},

type Mutation {
    createNewCountry(newCountry: NewCountry): Country!
    editCountryByID(updatedCountry: NewCountry, id: ID!): Country!
    deleteCountryById(id: ID!): CountryDeletedMessage!
}

input NewCountry {
    Country: String
    Year: String
    Area_Square_Kilometers: String
    Total_Population: String
}

type Country {
    id: ID
    Country: String
    Year: String
    Area_Square_Kilometers: String
    Total_Population: String
    createdAt: String
    updatedAt: String 
}  

type CountryDeletedMessage {
    id: ID!
    message: String!
    success: Boolean!
}


`;  