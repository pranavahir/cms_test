const { GraphQLServer } = require("graphql-yoga");
const keys = require('./config/keys')
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const Post = require('./models/Post')

const typeDefs = `
  scalar Upload
    
  type File{
    url:String!
  }
  type Post{
    
    Image:String!
    
  }
  type Mutation {
    #uploadFile(file: Upload!):File
    uploadFile(Image:Upload!):Post
  }

  type Query {
    hello: String
  }
`;
const storeUpload = ({ stream, filename }) =>
  new Promise((resolve, reject) =>{
    const pathName = path.join(__dirname,`/public/images/${filename}`)
    stream
      .pipe(fs.createWriteStream(pathName))
      .on("finish", () => resolve())
      .on("error", reject)
  });
const resolvers = {
  Mutation: {
    
    uploadFile: async (parent, {Image,file,Postalt,Keyword,FromDate,ToDate,Place,Country }) => {
      console.log(Image,"file")
      const { stream, filename } = await Image;
      await storeUpload({ stream, filename });
      const url = `http://localhost:4000/public/images/${filename}`
      const post = new Post({
        Postalt:Postalt,
        Keyword:Keyword,
        Image:url,
        FromDate:FromDate,
        ToDate:ToDate,
        Place:Place,
        Country:Country
      })
      console.log(post,"post")
      const createPost = await post.save()
      if(createPost){
        return{
          Postalt:createPost.Postalt,
        Keyword:createPost.Keyword,
        Image:createPost.Image,
        FromDate:createPost.FromDate,
        ToDate:createPost.ToDate,
        Place:createPost.Place,
        Country:createPost.Country
        }
      }

    }
  }
};
mongoose.connect(keys.mongoURI,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true},(error) => {
  if(error) {
      console.log(error);
      throw error
  }
})
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running on http://localhost:4000`))
