import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    Country: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Area_Square_Kilometers: {
        type: String,
        required: true
    },
    Total_Population: {
        type: String,
        required: true
    }
 }, 
    {
    timestamps: true
    
});

const Country = mongoose.model("countries", CountrySchema);

export default Country; 