import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
        required: false
    }
 }, 
    {
    timestamps: true
    
});

const Post = mongoose.model("posts", PostSchema);

export default Post;