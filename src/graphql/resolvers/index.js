
export default {
    Query: {
        getAllPosts: () => {
            return [{
                title: "Hello World",
                content: "sample"
            }]
        }
    },
    Mutation: {
        createNewPost: async (_, {newPost}, {Post} ) => {
            let result = await Post.create(newPost);
            return result;

        } 
    } 
}    
     