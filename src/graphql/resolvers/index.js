
export default {
    Query: {
        getAllCountries: async (_, {}, { Country }) => {
            let countries = await Country.find();
            return countries;
        }
    },


    Mutation: {
        createNewCountry: async (_, {newCountry}, {Country} ) => {
            let result = await Country.create(newCountry);
            return result;

        } ,
        editCountryByID: async (_, {id, updatedCountry}, {Country}) =>
        {
            let editedCountry = await Country.findByIdAndUpdate(id, {...updatedCountry}, {new: true});
            return editedCountry; 
        },
        deleteCountryById: async (_, { id }, {Country}) => {
            let deletedCountry = await Country.findByIdAndDelete(id);
            return {
                id: deletedCountry.id,
                message: "Country Deleted",
                success: true
            }
        } 
        
    } 
}    
         