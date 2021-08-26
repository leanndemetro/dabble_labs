
export default {
    Query: {
        getAllCountries: async (_, {}, { Country }) => {
            let countries = await Country.find();
            return countries;
        }
    },

    //update country
    //delete country

    Mutation: {
        createNewCountry: async (_, {newCountry}, {Country} ) => {
            let result = await Country.create(newCountry);
            return result;

        } 
    } 
}    
        